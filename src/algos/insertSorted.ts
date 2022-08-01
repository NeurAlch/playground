export const insertSorted = (nums: number[], num: number): number[] => {
  let i;
  const n = nums.length;

  for (i = n - 1; i >= 0; i--) {
    if (num >= nums[i]) {
      break;
    }
    nums[i + 1] = nums[i];
  }

  nums[i + 1] = num;
  return nums;
};
