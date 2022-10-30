import { seqSearch } from './seqSearch';

describe('seqSearch', () => {
  it('returns -1 if target is not found', () => {
    expect(seqSearch([], 1)).toBe(-1);
    expect(seqSearch([1, 2], 3)).toBe(-1);
  });

  it('returns the index of the target', () => {
    expect(seqSearch([1, 2, 3], 1)).toBe(0);
    expect(seqSearch([1, 2, 3], 2)).toBe(1);
    expect(seqSearch([1, 2, 3], 3)).toBe(2);
    expect(seqSearch([2, 3, 1], 3)).toBe(1);
  });
});
