export function tournamentWinner(competitions: string[][], results: number[]) {
  let winning: [string, number] = ['', 0];
  const teams: Record<string, number> = {};

  for (let i = 0; i < competitions.length; i++) {
    const competition = competitions[i];
    const result = results[i];
    const homeTeam = competition[0];
    const awayTeam = competition[1];
    const winner = result === 0 ? awayTeam : homeTeam;

    if (!teams[winner]) {
      teams[winner] = 0;
    }
    teams[winner] += 1;

    if (teams[winner] > winning[1]) {
      winning = [winner, teams[winner]];
    }
  }

  return winning[0];
}
