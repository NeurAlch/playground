export class Kata {
  static getCount(str: string): number {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        count++;
      }
    }

    return count;
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
