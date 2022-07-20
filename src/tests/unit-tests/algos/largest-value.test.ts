import { largestValueCompare, largestValueLoop, largestValueSimple } from '../../../algos/largest-value';

const ONE_VALUE = [1];
const ZERO_VALUE = [0];
const EMPTY: number[] = [];
const ONE_VALUE_NEGATIVE = [-5];
const ONLY_POSITIVE = [1, 3, 2, 0];
const WITH_NEGATIVE = [-1, 6, -5, 3];
const SAME_NUMBERS = [1, 1, 1, 1, 1];
const SORTED_REVERSE = [5, 4, 3, 2, 1];
const SORTED = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('largestValueSimple', () => {
  it('returns the largest value', () => {
    expect(largestValueSimple(SORTED)).toBe(9);
    expect(largestValueSimple(ONE_VALUE)).toBe(1);
    expect(largestValueSimple(ZERO_VALUE)).toBe(0);
    expect(largestValueSimple(SAME_NUMBERS)).toBe(1);
    expect(largestValueSimple(EMPTY)).toBe(undefined);
    expect(largestValueSimple(ONLY_POSITIVE)).toBe(3);
    expect(largestValueSimple(WITH_NEGATIVE)).toBe(6);
    expect(largestValueSimple(SORTED_REVERSE)).toBe(5);
    expect(largestValueSimple(ONE_VALUE_NEGATIVE)).toBe(-5);
  });
});

describe('largestValueLoop', () => {
  it('returns the largest value', () => {
    expect(largestValueLoop(SORTED)).toBe(9);
    expect(largestValueLoop(ONE_VALUE)).toBe(1);
    expect(largestValueLoop(ZERO_VALUE)).toBe(0);
    expect(largestValueLoop(SAME_NUMBERS)).toBe(1);
    expect(largestValueLoop(EMPTY)).toBe(undefined);
    expect(largestValueLoop(ONLY_POSITIVE)).toBe(3);
    expect(largestValueLoop(WITH_NEGATIVE)).toBe(6);
    expect(largestValueLoop(SORTED_REVERSE)).toBe(5);
    expect(largestValueLoop(ONE_VALUE_NEGATIVE)).toBe(-5);
  });
});

describe('largestValueCompare', () => {
  it('returns the largest value', () => {
    expect(largestValueCompare(SORTED)).toBe(9);
    expect(largestValueCompare(ONE_VALUE)).toBe(1);
    expect(largestValueCompare(ZERO_VALUE)).toBe(0);
    expect(largestValueCompare(SAME_NUMBERS)).toBe(1);
    expect(largestValueCompare(EMPTY)).toBe(undefined);
    expect(largestValueCompare(ONLY_POSITIVE)).toBe(3);
    expect(largestValueCompare(WITH_NEGATIVE)).toBe(6);
    expect(largestValueCompare(SORTED_REVERSE)).toBe(5);
    expect(largestValueCompare(ONE_VALUE_NEGATIVE)).toBe(-5);
  });
});
