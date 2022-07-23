# based on https://github.com/OlgaChernytska/word2vec-pytorch

import sys
import torch
import logging
import numpy as np
import torch.nn as nn
import torch.optim as optim
from functools import partial
from torch.utils.data import DataLoader
from torchtext.datasets import WikiText2
from torch.optim.lr_scheduler import LambdaLR
from torchtext.data.utils import get_tokenizer
from torchtext.data import to_map_style_dataset
from torchtext.vocab import build_vocab_from_iterator

WINDOW = 2
EPOCHS = 100
BATCH_SIZE = 100
EMBEDDING_DIM = 300
LEARNING_RATE = 0.005
MIN_WORD_FREQUENCY = 15
MAX_SEQUENCE_LENGTH = 20
EMBEDDINGS_MAX_NORM = 0.15

tokenizer = get_tokenizer("basic_english", language="en")


class Trainer:
    def __init__(
        self,
        model,
        epochs,
        train_dataloader,
        criterion,
        optimizer,
        lr_scheduler,
        device,
    ):
        self.model = model
        self.epochs = epochs
        self.train_dataloader = train_dataloader
        self.criterion = criterion
        self.optimizer = optimizer
        self.lr_scheduler = lr_scheduler
        self.device = device
        self.loss = []
        self.model.to(self.device)

    def train(self):
        for epoch in range(self.epochs):
            self._train_epoch()
            print(
                "Epoch: {}/{}, Train Loss={:.5f}".format(
                    epoch + 1,
                    self.epochs,
                    self.loss[-1],
                )
            )

            self.lr_scheduler.step()

    def _train_epoch(self):
        self.model.train()
        running_loss = []

        for i, batch_data in enumerate(self.train_dataloader):
            inputs = batch_data[0].to(self.device)
            context = batch_data[1].to(self.device)

            self.optimizer.zero_grad()
            outputs = self.model(inputs)
            loss = self.criterion(outputs, context)
            loss.backward()
            self.optimizer.step()

            running_loss.append(loss.item())

        epoch_loss = np.mean(running_loss)
        self.loss.append(epoch_loss)


class SkipGram(nn.Module):
    def __init__(self, vocab_size: int):
        super(SkipGram, self).__init__()
        self.target_embeddings = nn.Embedding(
            num_embeddings=vocab_size,
            embedding_dim=EMBEDDING_DIM,
            max_norm=EMBEDDINGS_MAX_NORM,
        )
        self.context_embeddings = nn.Linear(
            in_features=EMBEDDING_DIM,
            out_features=vocab_size,
        )

    def forward(self, _inputs):
        x = self.target_embeddings(_inputs)
        x = self.context_embeddings(x)
        return x


def collate(batch, text_pipeline):
    batch_input, batch_output = [], []
    for text in batch:
        text_tokens_ids = text_pipeline(text)

        if len(text_tokens_ids) < WINDOW * 2 + 1:
            continue

        if MAX_SEQUENCE_LENGTH:
            text_tokens_ids = text_tokens_ids[:MAX_SEQUENCE_LENGTH]

        for idx in range(len(text_tokens_ids) - WINDOW * 2):
            token_id_sequence = text_tokens_ids[idx : (idx + WINDOW * 2 + 1)]
            input_ = token_id_sequence.pop(WINDOW)
            outputs = token_id_sequence

            for output in outputs:
                batch_input.append(input_)
                batch_output.append(output)

    batch_input = torch.tensor(batch_input, dtype=torch.long)
    batch_output = torch.tensor(batch_output, dtype=torch.long)
    return batch_input, batch_output


def get_dataloader_and_vocab(ds_type: str):
    data_iter = WikiText2(root='data/', split=ds_type)
    data_iter = to_map_style_dataset(data_iter)
    vocab = build_vocab_from_iterator(
        map(tokenizer, data_iter),
        specials=["<unk>"],
        min_freq=MIN_WORD_FREQUENCY,
    )
    vocab.set_default_index(vocab["<unk>"])
    dataloader = DataLoader(
        data_iter,
        batch_size=BATCH_SIZE,
        shuffle=True,
        collate_fn=partial(collate, text_pipeline=lambda x: vocab(tokenizer(x))),
    )
    return dataloader, vocab


def get_top_similar(vocab, embeddings_norm, word: str, topN: int = 10):
    word_id = vocab[word]
    if word_id == 0:
        print("Out of vocabulary word")
        return

    word_vec = embeddings_norm[word_id]
    word_vec = np.reshape(word_vec, (len(word_vec), 1))
    dists = np.matmul(embeddings_norm, word_vec).flatten()
    top_n_ids = np.argsort(-dists)[1 : topN + 1]

    top_n_dict = {}
    for sim_word_id in top_n_ids:
        sim_word = vocab.lookup_token(sim_word_id)
        top_n_dict[sim_word] = dists[sim_word_id]

    return top_n_dict


def main():
    train_dataloader, vocab = get_dataloader_and_vocab("train")
    vocab_size = len(vocab.get_stoi())
    model = SkipGram(vocab_size)
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=LEARNING_RATE)
    lr_scheduler = LambdaLR(optimizer, lr_lambda=lambda epoch: (EPOCHS - epoch) / EPOCHS)
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    trainer = Trainer(
        model=model,
        epochs=EPOCHS,
        train_dataloader=train_dataloader,
        criterion=criterion,
        optimizer=optimizer,
        lr_scheduler=lr_scheduler,
        device=device,
    )
    trainer.train()

    embeddings = list(model.parameters())[0]
    embeddings = embeddings.cpu().detach().numpy()

    # normalization
    norms = (embeddings ** 2).sum(axis=1) ** (1 / 2)
    norms = np.reshape(norms, (len(norms), 1))
    embeddings_norm = embeddings / norms

    for word, sim in get_top_similar(vocab, embeddings_norm, "king").items():
        print("{}: {:.3f}".format(word, sim))


if __name__ == '__main__':
    logging.basicConfig(stream=sys.stdout, level=logging.DEBUG, format='%(asctime)s %(levelname)s %(message)s')
    main()
