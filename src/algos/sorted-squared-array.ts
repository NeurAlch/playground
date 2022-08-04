// O(n) time
// O(n) space
export const sortedSquaredArray = (array: number[]): number[] => {
  let left = 0;
  let right = array.length - 1;
  const sortedSquared = Array(array.length).fill(0);

  for (let i = array.length - 1; i >= 0; i--) {
    const absLeft = Math.abs(array[left]);
    const absRight = Math.abs(array[right]);

    if (absLeft > absRight) {
      sortedSquared[i] = array[left] * array[left];
      left++;
    } else if (absLeft <= absRight) {
      sortedSquared[i] = array[right] * array[right];
      right--;
    }
  }

  return sortedSquared;
};
