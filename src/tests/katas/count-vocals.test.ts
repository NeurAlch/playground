/**
 * Return the number (count) of vowels in the given string
 * We will consider [a, e, i, o, u] as vowels for this Kata (but not y)
 * The input string will only consist of lower case letters and/or spaces
 */

export class Kata {
  static getCount_1(str: string): number {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        count++;
      }
    }

    return count;
  }

  static getCount_2(str: string): number {
    return str
      .split('')
      .map((letter) => (['a', 'e', 'i', 'o', 'u'].includes(letter) ? 1 : 0) as number)
      .reduce((a, b) => a + b, 0);
  }

  static getCount_3(str: string): number {
    return str.split('').filter((letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter)).length;
  }
}

describe('countVocals', () => {
  it('counts the number of vocals in a string', () => {
    expect(Kata.getCount_1('abracadabra')).toBe(5);
    expect(Kata.getCount_1('aeiou')).toBe(5);
    expect(Kata.getCount_1('a')).toBe(1);
    expect(Kata.getCount_1('ctrl')).toBe(0);
    expect(Kata.getCount_1('')).toBe(0);

    expect(Kata.getCount_2('abracadabra')).toBe(5);
    expect(Kata.getCount_2('aeiou')).toBe(5);
    expect(Kata.getCount_2('a')).toBe(1);
    expect(Kata.getCount_2('ctrl')).toBe(0);
    expect(Kata.getCount_2('')).toBe(0);

    expect(Kata.getCount_3('abracadabra')).toBe(5);
    expect(Kata.getCount_3('aeiou')).toBe(5);
    expect(Kata.getCount_3('a')).toBe(1);
    expect(Kata.getCount_3('ctrl')).toBe(0);
    expect(Kata.getCount_3('')).toBe(0);
  });
});
