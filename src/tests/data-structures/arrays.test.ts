describe('JS arrays', () => {
  it('at', () => {
    const arr = [0, 1];

    // at can use negative indexes
    expect(arr[-1]).toBeUndefined();
    expect(arr.at(-1)).toBe(1);

    expect(arr.at(0)).toBe(0);
    expect(arr.at(2)).toBeUndefined();
  });

  it('Array()', () => {
    const arr1 = Array(3);
    expect(arr1.length).toBe(3);
    expect(arr1[0]).toBeUndefined();

    /* eslint-disable-next-line @typescript-eslint/no-array-constructor */
    const arr2 = Array(1, 2, 3);
    expect(arr2.length).toBe(3);
    expect(arr2[0]).toBe(1);
  });

  it('Array.of()', () => {
    const arr1 = Array.of(2);
    expect(arr1.length).toBe(1);
    expect(arr1[0]).toBe(2);

    const arr2 = Array.of(1, 2, 3);
    expect(arr2.length).toBe(3);
    expect(arr2[0]).toBe(1);
  });

  it('Array.from()', () => {
    const arr1 = Array.from([1, 2, 3]);
    expect(arr1.length).toBe(3);
    expect(arr1).toEqual([1, 2, 3]);

    const arr2 = Array.from([1, 2, 3], (x) => x * 2);
    expect(arr2.length).toBe(3);
    expect(arr2).toEqual([2, 4, 6]);

    const arr3 = Array.from({ length: 3 });
    expect(arr3.length).toBe(3);
    expect(arr3[0]).toBe(undefined);

    const arr4 = Array.from('1,2,3');
    expect(arr4.length).toBe(5);
    expect(arr4).toEqual(['1', ',', '2', ',', '3']);

    const arr5 = Array.from({ 0: 2, 1: 3, 2: 4, length: 3 });
    expect(arr5.length).toBe(3);
    expect(arr5).toEqual([2, 3, 4]);

    const arr6 = Array.from({ length: 3 }, (_, i) => i);
    expect(arr6.length).toBe(3);
    expect(arr6).toEqual([0, 1, 2]);
  });

  it('Array.concat()', () => {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const arr3 = [6, 7, 8];
    // does not mutate array
    expect(arr1.concat(arr2)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(arr1.concat(arr2, arr3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);

    const arr1ShallowCopy = arr1.concat();
    expect(arr1ShallowCopy).toEqual([0, 1, 2]);
  });

  it('Array.copyWithin()', () => {
    // mutates the array
    const arr1 = [0, 0, 0, 1, 1, 1];
    expect(arr1.copyWithin(0, 3)).toEqual([1, 1, 1, 1, 1, 1]);
    expect(arr1.copyWithin(3, 0, 2)).toEqual([1, 1, 1, 1, 1, 1]);

    expect([0, 0, 0, 1, 2, 3].copyWithin(0, 3, 4)).toEqual([1, 0, 0, 1, 2, 3]);
    expect([0, 0, 0, 1, 2, 3].copyWithin(0, 3)).toEqual([1, 2, 3, 1, 2, 3]);
    expect([0, 0, 0, 1, 2, 3].copyWithin(0, -2)).toEqual([2, 3, 0, 1, 2, 3]);
    expect([0, 0, 0, 1, 2, 3].copyWithin(0, -3, -1)).toEqual([1, 2, 0, 1, 2, 3]);
  });

  it('Array.entries()', () => {
    const arr1 = [0, 1, 2];

    const entries1 = [];
    for (const entry of arr1.entries()) {
      entries1.push(entry);
    }
    expect(entries1).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);

    const entries2 = [];
    for (const [index, value] of arr1.entries()) {
      entries2.push([index, value]);
    }
    expect(entries2).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);
  });

  it('Array.values()', () => {
    const arr1: Array<number | string> = [0, 1, 2];
    const values1 = [];
    for (const val of arr1.values()) {
      values1.push(val);
    }
    expect(values1).toEqual([0, 1, 2]);

    const valuesIterator = arr1.values();
    expect(valuesIterator.next().value).toBe(0);
    expect(valuesIterator.next().value).toBe(1);
    // iterator contains addresses not values
    arr1[2] = '2';
    const next1 = valuesIterator.next();
    expect(next1.value).toBe('2');
    expect(next1).toEqual({ done: false, value: '2' });
    // return undefined when done
    const next2 = valuesIterator.next();
    expect(next2.value).toBe(undefined);
    expect(next2).toEqual({ done: true, value: undefined });
    expect(valuesIterator.next()).toEqual({ done: true, value: undefined });
  });

  it('Array.every()', () => {
    const arr1 = [0, 1, 2];
    expect(arr1.every(Boolean)).toBe(false);
    expect(arr1.every((x) => x < 3)).toBe(true);
    expect(arr1.every((x) => x < 2)).toBe(false);
    expect(arr1.every((x) => x !== undefined)).toBe(true);
    expect(arr1.every((x, i) => arr1[i] >= 0)).toBe(true);
    expect(arr1.every((x, i, arr) => arr[i] >= 0)).toBe(true);
    expect(arr1.every((x, _, arr) => arr.includes(x))).toBe(true);

    const arr2 = [1, 2, 3];
    const isSame = (x: number[], y: number[]) => x.every((x, i) => x === y[i]);
    expect(isSame(arr1, arr2)).toBe(false);

    const arr3 = [2, 0, 1];
    const isSubset = (x: number[], y: number[]) => x.every((x) => y.includes(x));
    expect(isSubset(arr1, arr3)).toBe(true);

    const isMoreThan = (x: number[], num: number) => x.every((x) => x > num);
    expect(isMoreThan(arr1, 0)).toBe(false);
    expect(isMoreThan(arr2, 0)).toBe(true);
    expect(isMoreThan(arr1, 3)).toBe(false);
    expect(isMoreThan(arr1, -1)).toBe(true);
  });

  it('Array.some()', () => {
    const arr: Array<boolean | undefined | number> = [true, false, true, undefined];
    expect(arr.some(Boolean)).toBe(true);
    expect(arr.some((s) => s === false)).toBe(true);
    expect(arr.some((s) => s === undefined)).toBe(true);
    expect(arr.some((s) => s === 5)).toBe(false);
  });

  it('Array.fill()', () => {
    expect(Array(3).fill(0)).toEqual([0, 0, 0]);

    const empty: number[] = [];
    expect(empty.fill(1)).toEqual([]);

    // fill will use the same object reference
    const character = { name: '' };
    const arr2 = Array(3).fill(character);
    expect(arr2).toEqual([{ name: '' }, { name: '' }, { name: '' }]);
    character.name = 'Alice';
    expect(arr2).toEqual([{ name: 'Alice' }, { name: 'Alice' }, { name: 'Alice' }]);

    // fill mutates the array
    const arr3 = [0, 0, 0, 0];
    expect(arr3.fill(1)).toEqual([1, 1, 1, 1]);
    expect(arr3.fill(0, 1, 2)).toEqual([1, 0, 1, 1]);

    expect([0, 0, 0, 0].fill(1)).toEqual([1, 1, 1, 1]);
    expect([0, 0, 0, 0].fill(1, 1)).toEqual([0, 1, 1, 1]);
    // end index is exclusive
    expect([0, 0, 0, 0].fill(1, 1, 1)).toEqual([0, 0, 0, 0]);
    expect([0, 0, 0, 0].fill(1, 1, 2)).toEqual([0, 1, 0, 0]);
    expect([0, 0, 0, 0].fill(1, -1)).toEqual([0, 0, 0, 1]);
    expect([0, 0, 0, 0].fill(1, -2)).toEqual([0, 0, 1, 1]);
    expect([0, 0, 0, 0].fill(1, -2, -1)).toEqual([0, 0, 1, 0]);
  });

  it('Array.flat()', () => {
    expect([0, 1, 1, [1, 1]].flat()).toEqual([0, 1, 1, 1, 1]);
    expect([0, 1, 1, [[[1]]]].flat()).toEqual([0, 1, 1, [[1]]]);
    // depth 0 is a no-op
    expect([0, 1, 1, [[[1]]]].flat(0)).toEqual([0, 1, 1, [[[1]]]]);
    // depth 1 is the default
    expect([0, 1, 1, [[[1]]]].flat(1)).toEqual([0, 1, 1, [[1]]]);
    expect([0, 1, 1, [[[1]]]].flat(2)).toEqual([0, 1, 1, [1]]);
    expect([0, 1, 1, [[[1]]]].flat(3)).toEqual([0, 1, 1, 1]);
    expect([0, 1, 1, [[[1]]]].flat(10)).toEqual([0, 1, 1, 1]);

    // flatMap with an identity function is the same as flat with depth 1
    expect([0, 1, [1]].flatMap((x) => x)).toEqual([0, 1, 1]);
    expect([0, 1, [1]].flat()).toEqual([0, 1, 1]);
  });

  it('Array.includes()', () => {
    // default fromIndex is 0
    expect([0, 1, 2, 3].includes(1)).toBe(true);
    expect([0, 1, 2, 3].includes(1, 0)).toBe(true);
    expect([0, 1, 2, 3].includes(1, 1)).toBe(true);
    expect([0, 1, 2, 3].includes(1, 2)).toBe(false);
    // with negative index
    expect([0, 1, 2, 3].includes(1, -3)).toBe(true);

    // -0 is the same as 0, see: https://tc39.es/ecma262/#sec-samevaluezero
    expect([0, 1, 2, 3].includes(0)).toBe(true);
    expect([0, 1, 2, 3].includes(-0)).toBe(true);
    // but 1 !== -1
    expect([0, -1, 2, 3].includes(1)).toBe(false);
    expect([0, -1, 2, 3].includes(-1)).toBe(true);
  });

  it('Array.join()', () => {
    // if empty array, then we get empty string
    expect([].join()).toBe('');
    expect([].join(',')).toBe('');

    // defaults to comma (,)
    expect(['a', 'b', 'c'].join()).toBe('a,b,c');
    expect(['a', 'b', 'c'].join(',')).toBe('a,b,c');
    expect(['a', 'b', 'c'].join('')).toBe('abc');

    // undefined, null or [] are converted to empty strings
    expect(['a', 'b', undefined, [], null].join('')).toBe('ab');

    // the string conversion of array elements is used
    expect(['a', 'b', ['1']].join('')).toBe('ab1');
    expect(['1'].toString()).toBe('1');
    expect(['a', 'b', ['1', 2]].join('')).toBe('ab1,2');
    expect(['1', 2].toString()).toBe('1,2');
    expect(['a', 'b', ['1', undefined, 2]].join('')).toBe('ab1,,2');
    expect(['1', undefined, 2].toString()).toBe('1,,2');

    // separator is converted to string
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(['a', 'b', 'c'].join(0)).toBe('a0b0c');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(['a', 'b', 'c'].join([])).toBe('abc');
  });

  it('Array.keys()', () => {
    const keysIterable = [0, 1, undefined, 3].keys();
    const keys = [];
    for (const key of keysIterable) {
      keys.push(key);
    }
    expect(keys).toEqual([0, 1, 2, 3]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment,no-sparse-arrays
    const sparse = [0, 1, , 3];
    const keysSparse = [];
    for (const key of sparse.keys()) {
      keysSparse.push(key);
    }
    // does not ignore holes
    expect(keys).toEqual([0, 1, 2, 3]);
    expect(Object.keys(sparse)).toEqual(['0', '1', '3']);
  });

  it('Array.lastIndexOf()', () => {
    // searches backwards
    expect([0, 1, 0, 1, 2].lastIndexOf(1)).toBe(3);
    expect([0, 1, 0, 1, 2].lastIndexOf(1, -2)).toBe(3);
    expect([0, 1, 0, 1, 2].lastIndexOf(3)).toBe(-1);
    // we start at index 2 and then backwards, so we find the last 1 at index 1 because we don't see index 3
    expect([0, 1, 0, 1, 2].lastIndexOf(1, 2)).toBe(1);
    // this works because it goes backwards
    expect([0, 1, 0, 1, 2].lastIndexOf(1, 10)).toBe(3);
    // this fails because it searches backwards from a non-existing negative index
    expect([0, 1, 0, 1, 2].lastIndexOf(1, -10)).toBe(-1);

    const findAllIndexes = (arr: number[], val: number) => {
      const indices: number[] = [];
      let i = arr.lastIndexOf(val);
      while (i !== -1) {
        indices.push(i);
        i = arr.lastIndexOf(val, i - 1);
      }
      return indices;
    };
    expect(findAllIndexes([0, 0, 0, 0, 0], 1)).toEqual([]);
    expect(findAllIndexes([0, 1, 0, 0, 0], 1)).toEqual([1]);
    expect(findAllIndexes([0, 1, 0, 1, 0], 1)).toEqual([3, 1]);
    expect(findAllIndexes([0, 1, 0, 1, 0, 1], 1)).toEqual([5, 3, 1]);
  });

  it('Array.pop()', () => {
    const stack = [0, 1, 2];
    expect(stack.pop()).toBe(2);
    expect(stack).toEqual([0, 1]);
    expect([].pop()).toBeUndefined();
  });

  it('Array.shift()', () => {
    const stack = [0, 1, 2];
    expect(stack.shift()).toBe(0);
    expect(stack).toEqual([1, 2]);
    expect([].shift()).toBeUndefined();
  });

  it('Array.push()', () => {
    const stack = [0, 1, 2];
    // returns the new length
    expect(stack.push(3)).toEqual(4);
    expect(stack).toEqual([0, 1, 2, 3]);

    // accepts multiple elements
    expect([0, 1, 2].push(3, 4)).toEqual(5);
    expect([0, 1, 2].push(...[3, 4])).toEqual(5);

    // if we don't want mutation we can use concat
    const stack2 = [0, 1, 2];
    expect(stack2.concat(3)).toEqual([0, 1, 2, 3]);
    expect(stack2).toEqual([0, 1, 2]);
  });

  it('Array.unshift()', () => {
    const stack = [1, 2, 3];
    // returns the new length
    expect(stack.unshift(0)).toEqual(4);
    expect(stack).toEqual([0, 1, 2, 3]);

    // accepts multiple elements
    expect([0, 1, 2].unshift(3, 4)).toEqual(5);
    expect([0, 1, 2].unshift(...[3, 4])).toEqual(5);
  });

  it('Array.reduce()', () => {
    // deleted items are ignored
    const vals1 = [0, 1, 2];
    expect(
      vals1.reduce((acc: number[], curr, i) => {
        delete vals1[i + 1];
        acc.push(curr);
        return acc;
      }, []),
    ).toEqual([0, 2]);

    // values changed
    const vals2 = [0, 1, 2];
    expect(
      vals2.reduce((acc: number[], curr, i) => {
        vals2[i + 1]++;
        acc.push(curr);
        return acc;
      }, []),
    ).toEqual([0, 2, 3]);

    // only includes values from original array
    const vals3 = [0, 1, 2];
    expect(
      vals3.reduce((acc: number[], curr) => {
        vals3.push(curr + 1);
        acc.push(curr);
        return acc;
      }, []),
    ).toEqual([0, 1, 2]);

    // no initialValue, length > 1, start at index 1
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect([2, 3, 4].reduce((prev, curr, i) => i >= 1 && prev + curr)).toBe(9);

    const getThree = (a: any) => a + 1;
    // if array only has one element returns the value of that element, unless initialValue is provided
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment,no-sparse-arrays
    expect([, , , 1].reduce(getThree)).toBe(1);
    expect([0].reduce(getThree)).toBe(0);
    expect([0].reduce(getThree, 1)).toBe(2);
    // if array is empty and initial value is provided, initial value is returned
    expect([].reduce(getThree, 4)).toBe(4);

    const sum = (arr: number[]): number => arr.reduce((acc, curr) => acc + curr);
    expect(sum([1, 1, 1])).toBe(3);

    const flatten = (arr: number[][]): number[] => arr.reduce((acc, curr) => acc.concat(curr), []);
    expect(
      flatten([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([1, 2, 3, 4]);

    const groupBy = (objects: Record<string, string>[], key: string): Record<string, Record<string, string>[]> => {
      return objects.reduce((acc: Record<string, Record<string, string>[]>, curr) => {
        const k = curr[key];
        acc[k] ??= [];
        acc[k].push(curr);
        return acc;
      }, {});
    };
    expect(
      groupBy(
        [
          { type: 'cat', name: 'Panda' },
          { type: 'dog', name: 'Ginger' },
          { type: 'cat', name: 'Sophie' },
        ],
        'type',
      ),
    ).toEqual({
      cat: [
        { type: 'cat', name: 'Panda' },
        { type: 'cat', name: 'Sophie' },
      ],
      dog: [{ type: 'dog', name: 'Ginger' }],
    });

    const countRepeated = (arr: string[]): Record<string, number> => {
      return arr.reduce((acc: Record<string, number>, curr) => {
        acc[curr] ??= 0;
        acc[curr]++;
        return acc;
      }, {});
    };
    expect(countRepeated(['a', 'b', 'a', 'b', 'c'])).toEqual({
      a: 2,
      b: 2,
      c: 1,
    });

    const uniq = (arr: number[]): number[] => {
      return arr.reduce((acc: number[], curr) => {
        if (!acc.includes(curr)) {
          acc.push(curr);
        }
        return acc;
      }, []);
    };
    expect(uniq([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);

    const filterThenApply = (arr: number[], filterFn: (n: number) => boolean, applyFn: (n: number) => number): number[] => {
      return arr.reduce((acc: number[], curr) => {
        if (filterFn(curr)) {
          acc.push(applyFn(curr));
        }
        return acc;
      }, []);
    };
    expect(
      filterThenApply(
        [1, 2, 3, 4],
        (n) => n > 2,
        (n) => n * 2,
      ),
    ).toEqual([6, 8]);

    const pipe = (arr: number, ...functions: ((n: number) => number)[]): number => functions.reduce((acc, curr) => curr(acc), arr);
    expect(
      pipe(
        1,
        (n) => n + 1,
        (n) => n * 2,
      ),
    ).toEqual(4);
  });

  it('Array.slice()', () => {
    expect([1, 2, 3].slice()).toEqual([1, 2, 3]);
    expect([1, 2, 3].slice(1)).toEqual([2, 3]);
    expect([1, 2, [3]].slice(1)).toEqual([2, [3]]);
    // returns empty when start is greater than length
    expect([1, 2, [3]].slice(4)).toEqual([]);

    // end is not included
    expect([1, 2, 3].slice(0, 2)).toEqual([1, 2]);
    expect([1, 2, 3].slice(0, -1)).toEqual([1, 2]);
    expect([1, 2, 3].slice(0, 10)).toEqual([1, 2, 3]);
  });

  it('Array.splice()', () => {
    const arr1 = [1, 4, 5];
    // insert at index 1, returns [] since no element was removed
    expect(arr1.splice(1, 0, 2, 3)).toEqual([]);
    // array is mutated
    expect(arr1).toEqual([1, 2, 3, 4, 5]);

    const arr2 = [1, 3, 2];
    // returns the deleted elements
    expect(arr2.splice(1, 1)).toEqual([3]);
    expect(arr2).toEqual([1, 2]);

    const arr3 = [1, 3, 3];
    // replace by doing one delete and then an insert
    expect(arr3.splice(1, 1, 2)).toEqual([3]);
    expect(arr3).toEqual([1, 2, 3]);

    const arr4 = [1, 3, 3, 3];
    expect(arr4.splice(1, 2, 2)).toEqual([3, 3]);
    expect(arr4).toEqual([1, 2, 3]);

    const pop = (arr: number[]) => arr.splice(arr.length - 1, 1)[0];
    const arr5 = [1, 2, 3];
    expect(pop(arr5)).toEqual(3);
    expect(arr5).toEqual([1, 2]);

    const push = (arr: number[], ...elements: number[]) => {
      arr.splice(arr.length, 0, ...elements);
      return arr.length;
    };
    const arr6 = [1];
    expect(push(arr6, 2, 3)).toEqual(3);
    expect(arr6).toEqual([1, 2, 3]);

    const shift = (arr: number[]) => arr.splice(0, 1)[0];
    const arr7 = [1, 2, 3];
    expect(shift(arr7)).toEqual(1);
    expect(arr7).toEqual([2, 3]);

    const unshift = (arr: number[], ...elements: number[]) => {
      arr.splice(0, 0, ...elements);
      return arr.length;
    };
    const arr8 = [1, 2, 3];
    expect(unshift(arr8, 0)).toEqual(4);
    expect(arr8).toEqual([0, 1, 2, 3]);
  });

  it('Array.reverse()', () => {
    expect([1, 2, 3].reverse()).toEqual([3, 2, 1]);
    expect([].reverse()).toEqual([]);
    expect([1].reverse()).toEqual([1]);
  });

  it('Array.sort()', () => {
    expect([3, 2, 1].sort()).toEqual([1, 2, 3]);
    // without a sort function items are first converted into strings, so 80 comes before 9
    // null comes before undefined
    expect([undefined, null, 0, 3, 2, 9, 8, 1, 80].sort()).toEqual([0, 1, 2, 3, 8, 80, 9, null, undefined]);
    expect([3, 2, 1].sort((a, b) => a - b)).toEqual([1, 2, 3]);
    expect([Infinity, 3, 2, 1].sort((a, b) => a - b)).toEqual([1, 2, 3, Infinity]);
    expect([1, 2, 3].sort((a, b) => b - a)).toEqual([3, 2, 1]);
    // if NaN is present, the sort will not work as expected
    expect([1, NaN, 2, 3].sort((a, b) => b - a)).toEqual([1, NaN, 3, 2]);
  });
});

export {};
