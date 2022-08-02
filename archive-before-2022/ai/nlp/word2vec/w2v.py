import re
import os
import sys
import tqdm
import nltk
import psutil
import logging
import numpy as np
import tensorflow as tf
from typing import List
from nltk.corpus import stopwords
from hurry.filesize import size as filesize
from gensim.models.phrases import Phrases, ENGLISH_CONNECTOR_WORDS

nltk.download('stopwords', quiet=True)
nltk.download('punkt', quiet=True)

SEED = 42
EPOCHS = 50
WINDOW_SIZE = 3
VOCAB_SIZE = 5_000
NEGATIVE_SAMPLES = 5
SENTENCE_LENGTH = 10
BATCH_SIZE = 1_024
BUFFER_SIZE = 5_000
EMBEDDING_DIM = 100
BI_MIN_COUNT = 10
BI_THRESHOLD = 0.8
TRI_MIN_COUNT = 5
TRI_THRESHOLD = 0.8
AUTOTUNE = tf.data.AUTOTUNE
STOP_WORDS = set(stopwords.words('english'))


def get_process_memory() -> str:
    process = psutil.Process(os.getpid())
    mem_info = process.memory_info()
    return filesize(mem_info.rss)


def tokenize(sentence: str) -> list[str]:
    """Tokenize text into words.

    >>> tokenize('First Citizen:')
    ['first', 'citizen']
    >>> tokenize('Hello, world! Hi\\t5')
    ['hello', 'world', 'hi']
    >>> tokenize('This is the 1.5x timescale of the universe')
    ['1.5x', 'timescale', 'universe']
    """

    _tokens: list[str] = []

    for _word in nltk.word_tokenize(sentence.lower()):
        _word = re.sub(r'\s+', ' ', _word)
        _word = re.sub(r'[^a-z\d.-]', '', _word)
        if len(_word) > 1 and _word not in STOP_WORDS:
            _tokens.append(_word)

    return _tokens


def training_data(sequences: List[str], vocab_size: int):
    targets, contexts, labels = [], [], []
    sampling_table = tf.keras.preprocessing.sequence.make_sampling_table(vocab_size)

    for sentence in tqdm.tqdm(sequences):
        positive_skip_grams, _ = tf.keras.preprocessing.sequence.skipgrams(
            sentence,
            vocabulary_size=vocab_size,
            sampling_table=sampling_table,
            window_size=WINDOW_SIZE,
            negative_samples=0
        )

        for target_word, context_word in positive_skip_grams:
            context_class = tf.expand_dims(tf.constant([context_word], dtype="int64"), 1)
            negative_sampling_candidates, _, _ = tf.random.log_uniform_candidate_sampler(
                true_classes=context_class,
                num_true=1,
                num_sampled=NEGATIVE_SAMPLES,
                unique=True,
                range_max=vocab_size,
                seed=SEED,
                name="negative_sampling"
            )
            negative_sampling_candidates = tf.expand_dims(negative_sampling_candidates, 1)
            context = tf.concat([context_class, negative_sampling_candidates], 0)
            label = tf.constant([1] + [0] * NEGATIVE_SAMPLES, dtype="int64")

            targets.append(target_word)
            contexts.append(context)
            labels.append(label)

    return targets, contexts, labels


class Word2Vec(tf.keras.Model):
    def __init__(self, vocab_size, embedding_dim):
        super(Word2Vec, self).__init__()
        self.target_embedding = tf.keras.layers.Embedding(vocab_size, embedding_dim, input_length=1, name="w2v_embedding")
        self.context_embedding = tf.keras.layers.Embedding(vocab_size, embedding_dim, input_length=NEGATIVE_SAMPLES + 1)

    def call(self, pair):
        target, context = pair

        if len(target.shape) == 2:
            target = tf.squeeze(target, axis=1)

        word_emb = self.target_embedding(target)
        context_emb = self.context_embedding(context)
        # batch matrix multiplication, b=batch, e=embedding, c=context
        dots = tf.einsum('be,bce->bc', word_emb, context_emb)

        return dots


def custom_loss(x_logit, y_true):
    return tf.nn.sigmoid_cross_entropy_with_logits(logits=x_logit, labels=y_true)


def find_closest(word, vectors, vocab, top_n):
    min_dist = 10000
    top_index_dist = []
    word_index = vocab.index(word)
    query_vector = vectors[word_index]

    for index, vector in enumerate(vectors):
        similarity = tf.losses.CosineSimilarity()(query_vector, vector)
        if not np.array_equal(vector, query_vector) and similarity <= min_dist:
            min_dist = similarity
            if vocab[index] and vocab[index] != '[UNK]':
                top_index_dist.append([index, min_dist])

    top_index_dist.sort(key=lambda x: x[1])
    closest = [t[0] for t in top_index_dist[:top_n]]
    return [vocab[i] for i in closest]


def main():
    corpus = open('src/data/shakespeare.txt', 'r').read()
    sentences = nltk.sent_tokenize(corpus.lower())
    sentences_words = [tokenize(sentence) for sentence in sentences if len(sentence.split(' ')) > 1]

    bigrams = Phrases(sentences_words, min_count=BI_MIN_COUNT, threshold=BI_THRESHOLD, connector_words=ENGLISH_CONNECTOR_WORDS)
    trigrams = Phrases(bigrams[sentences_words], min_count=TRI_MIN_COUNT, threshold=TRI_THRESHOLD, connector_words=ENGLISH_CONNECTOR_WORDS)

    logging.debug('Sample text: {}...'.format(corpus[:30].replace('\n', ' ')))
    logging.debug('Total sentences {:,}, sample sentences {}'.format(len(sentences), sentences[:2]))
    logging.debug('Sample sentences with trigrams {}'.format(trigrams[sentences_words[3]]))
    logging.debug(f'Memory usage: {get_process_memory()}')

    corpus_file = '/tmp/shakespeare-clean.txt'
    with open(corpus_file, 'w') as f:
        for line in sentences_words:
            f.write(' '.join(trigrams[line]) + '\n')

    text_ds = tf.data.TextLineDataset(corpus_file)

    vectorize_layer = tf.keras.layers.TextVectorization(
        max_tokens=VOCAB_SIZE,
        output_mode='int',
        output_sequence_length=SENTENCE_LENGTH,
    )

    vectorize_layer.adapt(text_ds.batch(BATCH_SIZE))
    text_vector_ds = text_ds.batch(BATCH_SIZE).prefetch(AUTOTUNE).map(vectorize_layer).unbatch()
    sequences = list(text_vector_ds.as_numpy_iterator())
    targets, contexts, labels = training_data(sequences=sequences, vocab_size=VOCAB_SIZE)

    targets = np.array(targets)
    contexts = np.array(contexts)[:, :, 0]
    labels = np.array(labels)

    logging.debug('Targets shape: {}, contexts shape: {}, labels shape: {}'.format(targets.shape, contexts.shape, labels.shape))

    dataset = tf.data.Dataset.from_tensor_slices(((targets, contexts), labels))
    dataset = dataset.shuffle(BUFFER_SIZE).batch(BATCH_SIZE, drop_remainder=True)
    dataset = dataset.cache().prefetch(buffer_size=AUTOTUNE)

    word2vec = Word2Vec(VOCAB_SIZE, EMBEDDING_DIM)
    word2vec.compile(optimizer='adam', loss=tf.keras.losses.CategoricalCrossentropy(from_logits=True), metrics=['accuracy'])
    word2vec.fit(dataset, epochs=EPOCHS, callbacks=[])
    weights = word2vec.get_layer('w2v_embedding').get_weights()[0]
    vocab = vectorize_layer.get_vocabulary()

    logging.debug('Sample vocab: {}'.format(vocab[:10]))
    logging.debug('Vocab shape: {}, Weights shape: {}'.format(len(vocab), weights.shape))
    logging.debug(f'Memory usage: {get_process_memory()}')

    vectors = np.zeros((VOCAB_SIZE, EMBEDDING_DIM))
    for index, word in enumerate(vocab):
        vectors[index] = weights[index]

    word = 'king'
    closest_words = find_closest(word=word, vectors=vectors, vocab=vocab, top_n=20)
    logging.debug('Closest words to {}: {}'.format(word, closest_words))

    word = 'queen'
    closest_words = find_closest(word=word, vectors=vectors, vocab=vocab, top_n=20)
    logging.debug('Closest words to {}: {}'.format(word, closest_words))

    logging.debug(f'Memory usage: {get_process_memory()}')

if __name__ == '__main__':
    logging.basicConfig(stream=sys.stdout, level=logging.DEBUG, format='%(asctime)s %(levelname)s %(message)s')
    main()
