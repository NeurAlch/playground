export const nonConstructibleChange = (coins: number[]): number => {
  let change = 1;
  for (let i = 0; i < coins.length; i++) {
    const current = coins[i];
    if (change + current > change + 1) {
      return change + 1;
    }
    change += current;
  }
  return change;
};
