// assume sorted arr
export const binarySearch = (sortedArr: number[], target: number): number => {
  const n = sortedArr.length;

  let mid;
  let first = 0;
  let last = n - 1;

  while (first <= last) {
    mid = Math.ceil((first + last) / 2);

    if (sortedArr[mid] === target) {
      return mid;
    } else if (target < sortedArr[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
};
