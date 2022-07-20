// Wikipedia: "The Fibonacci sequence, in which each number is the sum of the two preceding ones."
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// [0, 1 + 0 =  1]
// [1, 1 + 0 =  1]
// [1, 1 + 1 =  2]
// [2, 1 + 2 =  3]
// [3, 3 + 2 =  5]
// ...

export const FIBONACCI_CACHE: { [key: number]: number } = {};

export const fibonacciRecursive = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

export const fibonacciIterative = (n: number): number => {
  let nMinus1 = 0;
  let nMinus2 = 1;

  for (let i = 0; i < n; i++) {
    [nMinus1, nMinus2] = [nMinus2, nMinus1 + nMinus2];
  }

  return nMinus1;
};

export const fibonacciRecursiveMemoized = (n: number): number => {
  if (FIBONACCI_CACHE[n] !== undefined) {
    return FIBONACCI_CACHE[n];
  }

  const f = fibonacciRecursive(n);
  FIBONACCI_CACHE[n] = f;
  return f;
};
