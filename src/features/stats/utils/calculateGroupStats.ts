import type { GameRecord } from "@/features/game/types/game-record";
import type { GroupStats } from "@/features/stats/types/game-stats";
import type { Idol } from "@/types/idol";

export const calculateGroupStats = (
  games: GameRecord[],
  idols: Idol[],
): GroupStats[] => {
  const idolMap = new Map(idols.map((idol) => [idol.id, idol]));

  const statsMap = new Map<string, { games: number; totalGuesses: number }>();

  games.forEach((game) => {
    const idol = idolMap.get(game.answerId);

    if (!idol) return;

    const current = statsMap.get(idol.group);

    if (current) {
      current.games += 1;
      current.totalGuesses += game.guesses;
    } else {
      statsMap.set(idol.group, {
        games: 1,
        totalGuesses: game.guesses,
      });
    }
  });

  return Array.from(statsMap.entries())
    .map(([group, stats]) => ({
      group,
      games: stats.games,
      averageGuesses: stats.totalGuesses / stats.games,
    }))
    .sort((a, b) => a.averageGuesses - b.averageGuesses);
};
