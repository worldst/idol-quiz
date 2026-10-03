import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { GameRecord } from "@/features/game/types/game-record";
import { compareGuess } from "@/features/game/utils/compareGuess";
import { getRandomIdol } from "@/features/game/utils/getRandomIdol";
import type { GuessResult,Idol } from "@/types/idol";

const initialState: {
  answer: Idol;
  guesses: GuessResult[];
  gameHistory: GameRecord[];
} = {
  answer: getRandomIdol(),
  guesses: [],
  gameHistory: [],
};

export const useGuessStore = create(
  persist(
    immer(
      combine(initialState, (set) => ({
        addGuess: (guess: Idol) =>
          set((state) => {
            state.guesses.unshift({
              idol: guess,
              compareResults: compareGuess(guess, state.answer),
            });
          }),

        completeGame: () =>
          set((state) => {
            state.gameHistory.unshift({
              id: crypto.randomUUID(),
              answerId: state.answer.id,
              guesses: state.guesses.length,
              playedAt: new Date().toISOString(),
            });
          }),

        nextQuiz: () =>
          set((state) => {
            state.answer = getRandomIdol();
            state.guesses = [];
          }),
      })),
    ),
    {
      name: "idol-quiz-storage",
      partialize: (state) => ({
        gameHistory: state.gameHistory,
      }),
    },
  ),
);
