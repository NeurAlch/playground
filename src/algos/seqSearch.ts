export const seqSearch = (nums: number[], target: number): number => {
  let index;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (target === nums[i]) {
      index = i;
      break;
    }
  }

  return index !== undefined ? index : -1;
};
