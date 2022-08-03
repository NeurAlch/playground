import { twoNumberSum } from '../../../algos/twoNumberSum';

describe('twoNumberSum', () => {
  it('returns the correct values', () => {
    expect(twoNumberSum([1, 4, 8, 7, 3], 11)).toEqual([4, 7]);
    expect(twoNumberSum([1, -1, 8, 11, 3], 10)).toEqual([-1, 11]);
    expect(twoNumberSum([1, 11, 8, -1, 3], 10)).toEqual([11, -1]);
    expect(twoNumberSum([1, 11, 8, -1, 30], 200)).toEqual([]);
  });
});
