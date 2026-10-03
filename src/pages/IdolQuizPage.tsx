import { useState } from "react";

import GameDescription from "@/features/game/components/GameDescription";
import GuessForm from "@/features/game/components/GuessForm";
import GuessTable from "@/features/game/components/GuessTable";
import QuizResultDrawer from "@/features/game/components/QuizResultDrawer";
import { useGuessStore } from "@/features/game/stores/useGuessStore";

const IdolQuizPage = () => {
  const answer = useGuessStore((state) => state.answer);
  const guesses = useGuessStore((state) => state.guesses);
  const nextQuiz = useGuessStore((state) => state.nextQuiz);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const handleNextQuiz = () => {
    nextQuiz();
    setIsResultOpen(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <GameDescription />
      <GuessForm onCorrect={() => setIsResultOpen(true)} />
      <GuessTable />

      <QuizResultDrawer
        open={isResultOpen}
        onOpenChange={setIsResultOpen}
        idol={answer}
        guesses={guesses}
        onNextQuiz={handleNextQuiz}
      />
    </div>
  );
};

export default IdolQuizPage;
