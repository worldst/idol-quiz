import type { GameRecord } from "@/features/game/types/game-record";

export interface GameStats {
  totalGames: number;
  totalGuesses: number;
  averageGuesses: number | null;
  bestScore: number | null;
}

export const calculateStats = (games: GameRecord[]): GameStats => {
  const totalGames = games.length;

  if (totalGames === 0) {
    return {
      totalGames: 0,
      totalGuesses: 0,
      averageGuesses: null,
      bestScore: null,
    };
  }

  const totalGuesses = games.reduce((total, game) => total + game.guesses, 0);

  const averageGuesses = totalGuesses / totalGames;

  const bestScore = Math.min(...games.map((game) => game.guesses));

  return {
    totalGames,
    totalGuesses,
    averageGuesses,
    bestScore,
  };
};
