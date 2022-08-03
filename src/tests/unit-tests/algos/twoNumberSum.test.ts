import { twoNumberSumLoops, twoNumberSumPointers, twoNumberSumHash } from '../../../algos/twoNumberSum';

describe('twoNumberSum', () => {
  it('returns the correct values', () => {
    expect(twoNumberSumLoops([], 10)).toEqual([]);
    expect(twoNumberSumLoops([4], 10)).toEqual([]);
    expect(twoNumberSumLoops([4, 6], 10)).toEqual([4, 6]);
    expect(twoNumberSumLoops([1, 4, 8, 7, 3], 11)).toEqual([4, 7]);
    expect(twoNumberSumLoops([1, -1, 8, 11, 3], 10)).toEqual([-1, 11]);
    expect(twoNumberSumLoops([1, 11, 8, -1, 3], 10)).toEqual([11, -1]);
    expect(twoNumberSumLoops([1, 11, 8, -1, 30], 200)).toEqual([]);
    expect(twoNumberSumLoops([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1]);
    expect(twoNumberSumLoops([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)).toEqual([-5, 0]);
  });

  it('returns the correct values', () => {
    expect(twoNumberSumHash([], 10)).toEqual([]);
    expect(twoNumberSumHash([4], 10)).toEqual([]);
    expect(twoNumberSumHash([4, 6], 10)).toEqual([4, 6]);
    expect(twoNumberSumHash([1, 4, 8, 7, 3], 11)).toEqual([4, 7]);
    expect(twoNumberSumHash([1, -1, 8, 11, 3], 10)).toEqual([-1, 11]);
    expect(twoNumberSumHash([1, 11, 8, -1, 3], 10)).toEqual([11, -1]);
    expect(twoNumberSumHash([1, 11, 8, -1, 30], 200)).toEqual([]);
    expect(twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1]);
    expect(twoNumberSumHash([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)).toEqual([-5, 0]);
  });

  it('returns the correct values', () => {
    expect(twoNumberSumPointers([], 10)).toEqual([]);
    expect(twoNumberSumPointers([4], 10)).toEqual([]);
    expect(twoNumberSumPointers([4, 6], 10)).toEqual([4, 6]);
    expect(twoNumberSumPointers([1, 4, 8, 7, 3], 11)).toEqual([3, 8]);
    expect(twoNumberSumPointers([1, -1, 8, 11, 3], 10)).toEqual([-1, 11]);
    expect(twoNumberSumPointers([1, 11, 8, -1, 3], 10)).toEqual([-1, 11]);
    expect(twoNumberSumPointers([1, 11, 8, -1, 30], 200)).toEqual([]);
    expect(twoNumberSumPointers([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([-1, 11]);
    expect(twoNumberSumPointers([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)).toEqual([-5, 0]);
  });
});
