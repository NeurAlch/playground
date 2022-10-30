import { nonConstructibleChange } from '../../interview-questions/nonConstructibleChange';

describe('nonConstructibleChange', () => {
  it('returns the minimum amount of change that cannot be created', () => {
    const cases = [
      {
        coins: [],
        answer: 1,
      },
      {
        coins: [5, 7, 1, 1, 2, 3, 22],
        answer: 20,
      },
    ];

    expect(nonConstructibleChange(cases[0].coins)).toBe(cases[0].answer);
    expect(nonConstructibleChange(cases[1].coins)).toBe(cases[1].answer);
  });
});
