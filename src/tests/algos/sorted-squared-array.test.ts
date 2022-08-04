import { sortedSquaredArray } from '../../algos/sorted-squared-array';

describe('sorted squared array', () => {
  it('should return the correct result', () => {
    expect(sortedSquaredArray([])).toEqual([]);
    expect(sortedSquaredArray([0])).toEqual([0]);
    expect(sortedSquaredArray([2])).toEqual([4]);
    expect(sortedSquaredArray([2, 4])).toEqual([4, 16]);
    expect(sortedSquaredArray([-2, 2])).toEqual([4, 4]);
    expect(sortedSquaredArray([-2, -1])).toEqual([1, 4]);
    expect(sortedSquaredArray([-5, -4, -3, -2, -1])).toEqual([1, 4, 9, 16, 25]);
    expect(sortedSquaredArray([-10, -5, 0, 5, 10])).toEqual([0, 25, 25, 100, 100]);
    expect(sortedSquaredArray([-5, 0, 5])).toEqual([0, 25, 25]);
  });
});
