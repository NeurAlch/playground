import { tensor } from '@tensorflow/tfjs';
import {
  getText,
  createNetwork,
  getDataShape,
  generateTrainingData,
  mapTokens,
  oneHotEncode,
  tokenize,
  train,
  predict,
  wordsFromPrediction,
} from '../../../nlp/word2vec';

let TEXT = '';

beforeAll(() => {
  TEXT = getText();
  TEXT = TEXT.slice(0, 300);
});

describe('TEXT', () => {
  it('should have text', () => {
    expect(TEXT.length).toBeGreaterThanOrEqual(1);
  });
});

describe('tokenize', () => {
  it('should tokenize a string', () => {
    expect(tokenize('Hello World!')).toEqual(['hello', 'world']);
    expect(tokenize('This is the 1.5x time they made the win!')).toEqual([
      'this',
      'is',
      'the',
      '1.5x',
      'time',
      'they',
      'made',
      'the',
      'win',
    ]);
  });
});

describe('mapTokens', () => {
  it('should map tokens to ids', () => {
    const tokens = tokenize('Hello World! Hello   World...');
    const { idToWord, wordToId } = mapTokens(tokens);

    expect(idToWord).toEqual({
      0: 'hello',
      1: 'world',
    });
    expect(wordToId).toEqual({
      hello: 0,
      world: 1,
    });

    expect(idToWord[0]).toEqual('hello');
    expect(wordToId['hello']).toEqual(0);
  });
});

describe('oneHotEncode', () => {
  it('should encode a list of tokens', () => {
    expect(oneHotEncode(0, 5)).toEqual([1, 0, 0, 0, 0]);
    expect(oneHotEncode(1, 5)).toEqual([0, 1, 0, 0, 0]);
    expect(oneHotEncode(6, 5)).toEqual([0, 0, 0, 0, 0]);
  });
});

describe('generateTrainingData', () => {
  it('should generate training data', () => {
    const tokens = tokenize('This is an amazing thing. I really like this thing, is amazing.');
    const { wordToId } = mapTokens(tokens);
    const { X, y } = generateTrainingData(tokens, wordToId, 2);

    expect(X.arraySync()).toEqual([
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
    ]);

    expect(y.arraySync()).toEqual([
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
    ]);

    expect(getDataShape(X)).toEqual([42, 8]);
    expect(getDataShape(y)).toEqual([42, 8]);
  });
});

describe('createNetwork', () => {
  it('should create a network with the right shape', () => {
    const network = createNetwork(20, 10);
    expect(getDataShape(network.embeddings)).toEqual([20, 10]);
    expect(getDataShape(network.weights)).toEqual([10, 20]);
  });
});

describe('predict', () => {
  it('should predict the right output', () => {
    const tokens = tokenize(TEXT);
    const { wordToId, idToWord } = mapTokens(tokens);
    const vocabSize = Object.keys(wordToId).length;
    let model = createNetwork(vocabSize, 10);
    const { X, y } = generateTrainingData(tokens, wordToId, 2);
    const nIterations = 100;
    const learningRate = 0.05;
    model = train(model, X, y, learningRate, nIterations);
    const learning = oneHotEncode(wordToId['language'], vocabSize);
    const prediction = predict(model, tensor([learning]));
    const words = wordsFromPrediction(prediction, idToWord);
    expect(words).toContain('natural');
    expect(words).toContain('processing');
  });
});
