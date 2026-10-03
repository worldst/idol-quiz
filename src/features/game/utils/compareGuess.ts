import type { CompareResult,Idol } from "@/types/idol";
import { calculateAge } from "@/utils/calculateAge";

export const compareGuess = (guess: Idol, answer: Idol): CompareResult => {
  const guessAge = calculateAge(guess.birthDate);
  const answerAge = calculateAge(answer.birthDate);

  return {
    birthDate:
      guessAge === answerAge
        ? "same"
        : guessAge < answerAge
          ? "older"
          : "younger",

    group: guess.group === answer.group,
    agency: guess.agency === answer.agency,
    gender: guess.gender === answer.gender,
  };
};
