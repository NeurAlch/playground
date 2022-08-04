// O(n)
// the numbers in sequence appear in the same order on array, but not necessarily consecutively
export const isValidSubsequence = (array: number[], sequence: number[]): boolean => {
  let sequencePointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (sequence[sequencePointer] === array[i]) {
      sequencePointer++;
    }
  }
  return sequencePointer === sequence.length;
};
