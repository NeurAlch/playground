import { createArrayOfSize } from './array';

describe('array helpers', () => {
  it('createArrayOfSize', () => {
    const array = createArrayOfSize<number>(10, 0);
    expect(array.length).toBe(10);
    expect(array[0]).toBe(0);
    expect(array[9]).toBe(0);
    expect(array).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const array2 = createArrayOfSize<number | undefined>(10, undefined);
    expect(array2.length).toBe(10);
    expect(array2[0]).toBe(undefined);
    expect(array2[9]).toBe(undefined);
    expect(array2).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  });
});
