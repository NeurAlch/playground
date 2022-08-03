import { insertSorted } from '../../algos/insertSorted';

describe('insertSorted', () => {
  it('should insert a number at the right spot on a sorted array', () => {
    expect(insertSorted([], 1)).toEqual([1]);
    expect(insertSorted([], 0)).toEqual([0]);
    expect(insertSorted([0, 1, 2], 0)).toEqual([0, 0, 1, 2]);
    expect(insertSorted([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(insertSorted([1, 2, 3, 4, 5, 5], 5)).toEqual([1, 2, 3, 4, 5, 5, 5]);
    expect(insertSorted([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4, 4, 5]);
    expect(insertSorted([1, 1, 2, 3, 4, 5], 1)).toEqual([1, 1, 1, 2, 3, 4, 5]);
    expect(insertSorted([100, 101, 110], 120)).toEqual([100, 101, 110, 120]);
    expect(insertSorted([100, 101, 110], 102)).toEqual([100, 101, 102, 110]);
  });
});
