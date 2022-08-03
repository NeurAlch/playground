// O(n^2) time, O(1) space
export const twoNumberSumLoops = (arr: number[], target: number): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};

// O(n) time, O(n) space
export const twoNumberSumHash = (arr: number[], target: number): number[] => {
  const hash: Record<number, number> = {};
  // X + Y = target
  // X = target - Y
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (hash[diff] !== undefined && diff !== arr[i]) {
      return [diff, arr[i]];
    }
    hash[arr[i]] = diff;
  }
  return [];
};

// O(n log n) time, O(1) space
export const twoNumberSumPointers = (arr: number[], target: number) => {
  const sorted = arr.sort((a, b) => a - b);

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    const x = sorted[left];
    const y = sorted[right];
    const sum = x + y;
    if (sum === target) {
      return [x, y];
    }
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
};
