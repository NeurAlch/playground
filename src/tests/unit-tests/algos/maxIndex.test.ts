import { maxIndex } from '../../../algos/maxIndex/maxIndex';

describe('max', () => {
  it('should return -1 if empty', () => {
    expect(maxIndex([])).toBe(-1);
  });

  it('should return the index of the biggest element', () => {
    expect(maxIndex([0])).toBe(0);
    expect(maxIndex([0, 1])).toBe(1);
    expect(maxIndex([1, 0])).toBe(0);
    expect(maxIndex([1, 0, 2])).toBe(2);
  });
});
