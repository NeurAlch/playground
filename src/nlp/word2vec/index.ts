import { concat, range, uniq } from 'lodash';

const TEXT = `Word2vec is a technique for natural language processing published in 2013. The word2vec algorithm uses a neural network model to learn word associations from a large corpus of text. Once trained, such a model can detect synonymous words or suggest additional words for a partial sentence. As the name implies, word2vec represents each distinct word with a particular list of numbers called a vector. The vectors are chosen carefully such that a simple mathematical function (the cosine similarity between the vectors) indicates the level of semantic similarity between the words represented by those vectors.`;

type IdToWord = Record<number, string>;
type WordToId = Record<string, number>;

export const tokenize = (text: string): string[] => {
  const words = text.toLowerCase().split(/\s+/);
  return words.map((word) => {
    let w = word;
    w = w.replace(/\s+/g, ' ');
    w = w.replace(/\.+/g, '.');
    if (w.endsWith('.')) {
      w = w.slice(0, -1);
    }
    return w.replace(/[^a-z\d-.']/g, '');
  });
};

export const mapTokens = (tokens: string[]): { idToWord: IdToWord; wordToId: WordToId } => {
  const idToWord: IdToWord = {};
  const wordToId: WordToId = {};
  const uniqTokens = uniq(tokens);
  for (let i = 0; i < uniqTokens.length; i++) {
    idToWord[i] = uniqTokens[i];
    wordToId[uniqTokens[i]] = i;
  }
  return { idToWord, wordToId };
};

export const oneHotEncode = (id: number, vocabSize: number): number[] => {
  const oneHot: number[] = Array(vocabSize).fill(0);
  if (id < vocabSize) {
    oneHot[id] = 1;
  }
  return oneHot;
};

export const generateTrainingData = (tokens: string[], wordToId: WordToId, window: number): { X: number[][]; y: number[][] } => {
  const X: number[][] = [];
  const y: number[][] = [];
  const vocabSize = Object.keys(wordToId).length;

  for (let i = 0; i < tokens.length; i++) {
    const idx = concat(range(Math.max(0, i - window), i), range(i, Math.min(tokens.length, i + window + 1)));
    for (const j of idx) {
      if (j === i) {
        continue;
      }
      X.push(oneHotEncode(wordToId[tokens[i]], vocabSize));
      y.push(oneHotEncode(wordToId[tokens[j]], vocabSize));
    }
  }

  return { X, y };
};

export const dataShape = (arr: number[][]): [number, number] => {
  const [rows, cols] = [arr.length, arr[0].length];
  return [rows, cols];
};
