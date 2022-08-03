export const createArrayOfSize = <T>(size: number, defaultValue: T): T[] => {
  let i = 0;
  const array: T[] = Array(size);
  while (i < size) {
    array[i++] = defaultValue;
  }
  return array;
};
