/*
 * Number of comparisons is max{n-1, 0}
 */
export const maxIndex = (nums: number[]): number => {
  const n = nums.length;
  if (n < 1) {
    return -1;
  }

  let posIndex = 0;
  for (let i = 1; i < n; i++) {
    if (nums[posIndex] < nums[i]) {
      posIndex = i;
    }
  }

  return posIndex;
};
