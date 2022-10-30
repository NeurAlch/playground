import { nonConstructibleChange } from '../../interview-questions/nonConstructibleChange';

describe('nonConstructibleChange', () => {
  it('returns the minimum amount of change that cannot be created', () => {
    const cases = [
      {
        coins: [],
        answer: 1,
      },
      {
        coins: [1],
        answer: 2,
      },
      {
        coins: [2],
        answer: 1,
      },
      {
        coins: [1, 3],
        answer: 2,
      },
      {
        coins: [1, 2, 5],
        answer: 4,
      },
      {
        coins: [5, 7, 1, 1, 2, 3, 22],
        answer: 20,
      },
      {
        coins: [1, 5, 1, 1, 1, 10, 15, 20, 100],
        answer: 55,
      },
      {
        coins: [6, 4, 5, 1, 1, 8, 9],
        answer: 3,
      },
      {
        coins: [1, 2, 3],
        answer: 7,
      },
    ];

    expect(nonConstructibleChange(cases[0].coins)).toBe(cases[0].answer);
    expect(nonConstructibleChange(cases[1].coins)).toBe(cases[1].answer);
    expect(nonConstructibleChange(cases[2].coins)).toBe(cases[2].answer);
    expect(nonConstructibleChange(cases[3].coins)).toBe(cases[3].answer);
    expect(nonConstructibleChange(cases[4].coins)).toBe(cases[4].answer);
    expect(nonConstructibleChange(cases[5].coins)).toBe(cases[5].answer);
    expect(nonConstructibleChange(cases[6].coins)).toBe(cases[6].answer);
    expect(nonConstructibleChange(cases[7].coins)).toBe(cases[7].answer);
    expect(nonConstructibleChange(cases[8].coins)).toBe(cases[8].answer);
  });
});
