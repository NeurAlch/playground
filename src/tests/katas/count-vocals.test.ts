export class Kata {
  static getCount(str: string): number {
    return str
      .split('')
      .map((letter) => (['a', 'e', 'i', 'o', 'u'].includes(letter) ? 1 : 0) as number)
      .reduce((a, b) => a + b, 0);
  }
}

describe('countVocals', () => {
  it('counts the number of vocals in a string', () => {
    expect(Kata.getCount('abracadabra')).toBe(5);
    expect(Kata.getCount('aeiou')).toBe(5);
    expect(Kata.getCount('a')).toBe(1);
    expect(Kata.getCount('ctrl')).toBe(0);
    expect(Kata.getCount('')).toBe(0);
  });
});
