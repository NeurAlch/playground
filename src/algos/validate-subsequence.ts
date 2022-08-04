// O(1) space
// best case O(1) time, worst case O(n) time
// the numbers in sequence appear in the same order on array, but not necessarily consecutively
export const isValidSubsequence = (array: number[], sequence: number[]): boolean => {
  if (sequence.length === 0) {
    return true;
  }

  if (sequence.length > array.length) {
    return false;
  }

  let sequencePointer = 0;
  for (let i = 0; i < array.length; i++) {
    // do not continue if we already found the sequence
    if (sequencePointer === sequence.length) {
      return true;
    }

    if (sequence[sequencePointer] === array[i]) {
      sequencePointer++;
    }
  }

  return sequencePointer === sequence.length;
};
