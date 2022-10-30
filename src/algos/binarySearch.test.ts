import { binarySearch } from '../../algos/binarySearch';

describe('binarySearch', () => {
  it('finds the value', () => {
    expect(binarySearch([1, 2, 3], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toBe(3);
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([], 2)).toBe(-1);
  });
});
