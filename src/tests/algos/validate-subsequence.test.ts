import { isValidSubsequence } from '../../algos/validate-subsequence';

describe('validate subsequence', () => {
  it('should return true or false if it is a valid subsequence', () => {
    expect(isValidSubsequence([], [])).toBe(true);
    expect(isValidSubsequence([1, 2, 3], [1])).toBe(true);
    expect(isValidSubsequence([1, 1, 3], [1, 1])).toBe(true);
    expect(isValidSubsequence([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toBe(true);

    expect(isValidSubsequence([], [1])).toBe(false);
    expect(isValidSubsequence([1, 2, 3], [1, 3, 2])).toBe(false);
    expect(isValidSubsequence([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 2])).toBe(false);
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, -1, 6, 10])).toBe(false);
  });
});
