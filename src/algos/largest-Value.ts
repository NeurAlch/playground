type ExpectedReturn = number | undefined;

// O(n)
export const largestValueBuiltin = (arr: number[]): ExpectedReturn => {
  if (arr.length === 0) {
    return undefined;
  }

  return Math.max(...arr);
};

// O(n)
export const largestValueLoop = (arr: number[]): ExpectedReturn => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

// O(n^2)
export const largestValueCompare = (arr: number[]): ExpectedReturn => {
  if (arr.length === 0) {
    return undefined;
  }

  for (const a of arr) {
    let is_bigger = true;
    for (const b of arr) {
      if (a < b) {
        is_bigger = false;
        break;
      }
    }

    if (is_bigger) {
      return a;
    }
  }

  return undefined;
};
