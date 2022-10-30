import { binarySearch } from '../../algos/binarySearch';

describe('array Big-O time', () => {
  it('returns value at O(1)', () => {
    expect([1, 2, 3][0]).toBe(1);
  });

  it('returns value at O(n)', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(arr.find((value, i, a) => a[i] === 7)).toBe(7);
  });

  it('returns value at O(log n) for binary search', () => {
    // preprocessing (sorting) data makes subsequent queries efficient, from O(n) to O(log n)
    const arr = [2, 1, 3, 5, 4, 6, 7, 8, 9].sort();
    expect(binarySearch(arr, 4)).toBe(3);
    expect(binarySearch(arr, 2)).toBe(1);
  });

  it('push is O(1)', () => {
    const arr = [1, 2, 3];
    arr.push(4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it('unshift is O(n)', () => {
    const arr = [1, 2, 3];
    arr.unshift(0);
    expect(arr).toEqual([0, 1, 2, 3]);
  });
});
