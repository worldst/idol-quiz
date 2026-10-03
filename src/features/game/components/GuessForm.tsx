import { CircleCheckBig,UserSearch } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useGuessStore } from "@/features/game/stores/useGuessStore";
import {
  showDuplicateToast,
  showNotFoundToast,
} from "@/features/game/utils/toast";
import { mockIdols } from "@/mocks/idols";

const GuessForm = ({ onCorrect }: { onCorrect: () => void }) => {
  const [guess, setGuess] = useState("");
  const [open, setOpen] = useState(false);

  const guesses = useGuessStore((state) => state.guesses);
  const answer = useGuessStore((state) => state.answer);
  const addGuess = useGuessStore((state) => state.addGuess);
  const completeGame = useGuessStore((state) => state.completeGame);

  const idolNames = mockIdols.map((idol) => idol.name);
  const filteredIdols = guess.trim()
    ? idolNames.filter((name) =>
        name.toUpperCase().includes(guess.trim().toUpperCase()),
      )
    : [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedGuess = guess.trim();

    if (!trimmedGuess) return;

    // 입력한 이름 존재 여부 판단
    const guessedIdol = mockIdols.find(
      (idol) => idol.name.toUpperCase() === trimmedGuess.toUpperCase(),
    );

    if (!guessedIdol) {
      showNotFoundToast(trimmedGuess);
      setGuess("");
      return;
    }

    // 이미 입력한 이름이 있는지 판단
    const alreadyGuessed = guesses.some(
      (guess) => guess.idol.id === guessedIdol.id,
    );

    if (alreadyGuessed) {
      showDuplicateToast();
      setGuess("");
      return;
    }

    addGuess(guessedIdol);
    setGuess("");

    // 이름이 중복되는 아이돌 방지 -> 해당 객체 id 비교
    if (guessedIdol.id === answer.id) {
      completeGame();
      onCorrect();
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Combobox
        items={filteredIdols}
        value={guess}
        onValueChange={(value) => {
          setGuess(value ?? "");
          setOpen(false);
        }}
        open={open}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setOpen(false);
          }
        }}
        filter={null}
      >
        <ComboboxInput
          showTrigger={false}
          className="group flex-1 focus-within:!border-indigo-500 focus-within:!ring-1 focus-within:!ring-indigo-500 [&>input]:text-sm"
          placeholder="아이돌 이름을 입력해주세요"
          onChange={(e) => {
            const value = e.target.value;

            setGuess(value);

            if (value.trim()) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
        >
          <InputGroupAddon align="inline-start">
            <UserSearch className="text-muted-foreground group-focus-within:text-indigo-500" />
          </InputGroupAddon>
        </ComboboxInput>

        <ComboboxContent>
          <ComboboxList>
            {(name) => (
              <ComboboxItem
                key={name}
                value={name}
                className="data-[highlighted]:bg-indigo-500/20 data-[highlighted]:text-indigo-400"
              >
                {name}
              </ComboboxItem>
            )}
          </ComboboxList>

          {guess.trim() && filteredIdols.length === 0 && (
            <ComboboxEmpty className="justify-start px-3">
              일치하는 아이돌이 없습니다.
            </ComboboxEmpty>
          )}
        </ComboboxContent>
      </Combobox>

      <Button
        type="submit"
        className="w-30 gap-2 border border-indigo-300 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:text-indigo-800 dark:border-indigo-500 dark:bg-indigo-500/30 dark:text-indigo-300 dark:hover:bg-indigo-500/40 dark:hover:text-indigo-400"
      >
        정답 입력
        <CircleCheckBig />
      </Button>
    </form>
  );
};

export default GuessForm;
