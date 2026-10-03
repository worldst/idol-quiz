import type { GameRecord } from "@/features/game/types/game-record";
import type { IdolStats } from "@/features/stats/types/game-stats";
import type { Idol } from "@/types/idol";

export const calculateIdolStats = (
  games: GameRecord[],
  idols: Idol[],
): IdolStats[] => {
  const idolMap = new Map(idols.map((idol) => [idol.id, idol]));

  const statsMap = new Map<number, { games: number; totalGuesses: number }>();

  games.forEach((game) => {
    const current = statsMap.get(game.answerId);

    if (current) {
      current.games += 1;
      current.totalGuesses += game.guesses;
    } else {
      statsMap.set(game.answerId, {
        games: 1,
        totalGuesses: game.guesses,
      });
    }
  });

  return Array.from(statsMap.entries())
    .map(([idolId, stats]) => {
      const idol = idolMap.get(idolId);

      if (!idol) return null;

      return {
        idolId,
        idolName: idol.name,
        games: stats.games,
        averageGuesses: stats.totalGuesses / stats.games,
      };
    })
    .filter((stat): stat is IdolStats => stat !== null)
    .sort((a, b) => a.averageGuesses - b.averageGuesses);
};
