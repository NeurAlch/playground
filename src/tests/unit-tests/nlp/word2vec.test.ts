import {
  getText,
  createNetwork,
  getDataShape,
  generateTrainingData,
  mapTokens,
  tokenize,
  train,
  predict,
  wordsFromPrediction,
} from '../../../nlp/word2vec';
import { oneHot } from '@tensorflow/tfjs-node-gpu';

let TEXT_W2V = '';
let TEXT_WIKI = '';
beforeAll(() => {
  TEXT_W2V = getText('word2vec.txt', 1000);
  TEXT_WIKI = getText('wiki-sample.txt', 1000);
});

describe('TEXT', () => {
  it('should have text', () => {
    expect(TEXT_W2V.length).toBeGreaterThanOrEqual(1);
    expect(TEXT_WIKI.length).toBeGreaterThanOrEqual(1);
  });
});

describe('tokenize', () => {
  it('should tokenize a string', () => {
    expect(tokenize('Hello World!')).toEqual(['hello', 'world']);
    expect(tokenize('---- a.')).toEqual(['a']);
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

describe('generateTrainingData', () => {
  it('should generate training data', () => {
    const tokens = tokenize('This is an amazing thing. I really like this thing, is amazing.');
    const { wordToId } = mapTokens(tokens);
    const { X, y } = generateTrainingData(tokens, wordToId, 2);

    const X0 = X[0];
    const y0 = y[0];

    expect(X0).toEqual([1, 0, 0, 0, 0, 0, 0, 0]);
    expect(y0).toEqual([0, 1, 0, 0, 0, 0, 0, 0]);

    expect([X.length, X0?.length]).toEqual([42, 8]);
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
  it('should predict the right output for word2vec.txt', () => {
    const window = 2;
    const nIterations = 50;
    const embeddingSize = 10;
    const learningRate = 0.025;
    const tokens = tokenize(TEXT_W2V);
    const { wordToId, idToWord } = mapTokens(tokens);
    const vocabSize = Object.keys(wordToId).length;
    let model = createNetwork(vocabSize, embeddingSize);
    const { X, y } = generateTrainingData(tokens, wordToId, window);
    model = train(model, X, y, learningRate, nIterations);
    expect(wordToId['language']).toBeDefined();
    if (wordToId['language'] !== undefined) {
      const learning = oneHot([wordToId['language']], vocabSize);
      const prediction = predict(model, learning);
      const words = wordsFromPrediction(prediction, idToWord);
      expect(words).toContain('processing');
      expect(words).toContain('natural');
    }
  });

  it('should predict the right output for wiki.txt', () => {
    const window = 3;
    const nIterations = 50;
    const embeddingSize = 10;
    const learningRate = 0.025;
    const tokens = tokenize(TEXT_WIKI);
    const { wordToId, idToWord } = mapTokens(tokens);
    const vocabSize = Object.keys(wordToId).length;
    let model = createNetwork(vocabSize, embeddingSize);
    const { X, y } = generateTrainingData(tokens, wordToId, window);
    model = train(model, X, y, learningRate, nIterations);
    expect(wordToId['corn']).toBeDefined();
    if (wordToId['corn'] !== undefined) {
      const learning = oneHot([wordToId['corn']], vocabSize);
      const prediction = predict(model, learning);
      const words = wordsFromPrediction(prediction, idToWord);
      expect(words).toContain('maize');
    }
  });
});
