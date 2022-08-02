import { concat, range, uniq } from 'lodash';
import { sum, matMul, softmax, Tensor2D, tensor, Tensor, randomNormal, tensor1d } from '@tensorflow/tfjs';
import { readFileSync } from 'fs';
import { join } from 'path';
import { oneHot } from '@tensorflow/tfjs-node-gpu';

type IdToWord = Record<number, string>;
type WordToId = Record<string, number>;
type Network = { embeddings: Tensor2D; weights: Tensor2D };

export const tokenize = (text: string): string[] => {
  const words = text.toLowerCase().split(/\s+/);
  return words
    .map((word) => {
      let w = word.trim();
      w = w.replace(/\s+/g, ' ');
      w = w.replace(/\.+/g, '.');
      w = w.replace(/-+/g, '-');
      if (w.endsWith('.')) {
        w = w.slice(0, -1);
      }
      if (w.replace(/[^a-z\d]/g, '').length < 1) {
        return '';
      }
      return w.replace(/[^a-z\d-.']/g, '');
    })
    .filter((word) => word.length > 0);
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
      const X0 = oneHot(tensor1d([wordToId[tokens[i]]], 'int32'), vocabSize).arraySync() as number[][];
      const y0 = oneHot(tensor1d([wordToId[tokens[j]]], 'int32'), vocabSize).arraySync() as number[][];
      X.push(X0[0]);
      y.push(y0[0]);
    }
  }

  return { X, y };
};

export const getDataShape = (arr: Tensor2D): [number, number] => {
  return arr.shape;
};

export const createNetwork = (vocabSize: number, embeddingSize: number): Network => {
  return {
    embeddings: randomNormal([vocabSize, embeddingSize]),
    weights: randomNormal([embeddingSize, vocabSize]),
  };
};

export const forward = (network: Network, X: Tensor): { a1: Tensor; a2: Tensor; z: Tensor } => {
  const a1 = matMul(X, network.embeddings);
  const a2 = matMul(a1, network.weights);
  return {
    a1,
    a2,
    z: softmax(a2),
  };
};

export const crossEntropy = (y: Tensor, z: Tensor) => {
  return tensor(-sum(z.log().mul(y)));
};

export const backward = (network: Network, X: Tensor, y: Tensor, alpha: number): Tensor => {
  const { a1, z } = forward(network, X);
  const da2 = z.sub(y);
  const dw2 = matMul(a1.transpose(), da2);
  const da1 = matMul(da2, network.weights.transpose());
  const dw1 = matMul(X.transpose(), da1);
  network.embeddings = network.embeddings.sub(dw1.mul(alpha));
  network.weights = network.weights.sub(dw2.mul(alpha));
  return crossEntropy(z, y);
};

export const train = (network: Network, X: number[][], y: number[][], alpha: number, epochs: number): Network => {
  const XTensor = tensor(X);
  const yTensor = tensor(y);
  for (let i = 0; i < epochs; i++) {
    const loss = backward(network, XTensor, yTensor, alpha);
    if (i % 50 === 0) {
      console.log(`Epoch ${i + 1}: ${loss.dataSync()[0]}`);
    }
  }
  return network;
};

export const predict = (network: Network, X: Tensor): Tensor => {
  const { z } = forward(network, X);
  return z;
};

export const wordsFromPrediction = (prediction: Tensor, idToWord: IdToWord): string[] => {
  const words: string[] = [];
  const predictions = prediction.arraySync() as number[][];
  for (let i = 0; i < predictions[0].length; i++) {
    if (predictions[0][i] > 0.01) {
      words.push(idToWord[i]);
    }
  }
  return words;
};

export const getText = (filename: string, maxSize: number) => {
  return readFileSync(join(__dirname, '../../data/', filename)).toString().slice(0, maxSize);
};
