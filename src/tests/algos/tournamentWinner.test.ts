import { tournamentWinner } from '../../algos/tournamentWinner';

describe('tournamentWinner', () => {
  it('returns the winning team', () => {
    const cases = [
      {
        competitions: [
          ['HTML', 'C#'],
          ['C#', 'Python'],
          ['Python', 'HTML'],
        ],
        results: [0, 0, 1],
      },
      {
        competitions: [
          ['HTML', 'Java'],
          ['Java', 'Python'],
          ['Python', 'HTML'],
          ['C#', 'Python'],
          ['Java', 'C#'],
          ['C#', 'HTML'],
        ],
        results: [0, 1, 1, 1, 0, 1],
      },
    ];

    const case1 = cases[0];
    expect(tournamentWinner(case1.competitions, case1.results)).toBe('Python');

    const case2 = cases[1];
    expect(tournamentWinner(case2.competitions, case2.results)).toBe('C#');
  });
});
