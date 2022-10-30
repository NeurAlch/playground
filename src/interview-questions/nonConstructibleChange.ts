export const nonConstructibleChange = (coins: number[]): number => {
  let change = 1;

  if (coins.length === 0) {
    return change;
  }

  const sorted = coins.sort((a, b) => a - b);

  if (sorted[0] > 1) {
    return change;
  }

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > change) {
      return change;
    }
    change += sorted[i];
  }

  return change;
};
