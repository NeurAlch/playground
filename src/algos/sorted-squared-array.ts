// O(n) time
// O(n) space
export const sortedSquaredArray = (array: number[]): number[] => {
  let left = 0;
  let right = array.length - 1;
  const sortedSquared = Array(array.length).fill(0);

  for (let i = array.length - 1; i >= 0; i--) {
    const leftVal = array[left];
    const rightVal = array[right];

    if (Math.abs(leftVal) > Math.abs(rightVal)) {
      sortedSquared[i] = leftVal * leftVal;
      left++;
    } else {
      sortedSquared[i] = rightVal * rightVal;
      right--;
    }
  }

  return sortedSquared;
};
