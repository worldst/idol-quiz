import { ChevronsDown,ChevronsUp, CircleHelp } from "lucide-react";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { useGuessStore } from "@/features/game/stores/useGuessStore";
import { cn } from "@/lib/utils";
import { calculateAge } from "@/utils/calculateAge";

const GuessTable = () => {
  const guesses = useGuessStore((store) => store.guesses);

  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-muted/30 min-w-[700px] rounded-xl border p-3 pt-0">
        <div className="text-muted-foreground grid grid-cols-[50px_120px_70px_1fr_1fr_70px] gap-2 border-b text-sm">
          <div className="grid place-items-center py-2">횟수</div>
          <div className="grid place-items-center py-2">이름</div>
          <div className="grid place-items-center py-2">성별</div>
          <div className="grid place-items-center py-2">소속사</div>
          <div className="grid place-items-center py-2">그룹</div>
          <div className="grid place-items-center py-2">나이</div>
        </div>

        {guesses.length === 0 ? (
          <Empty className="bg-card text-muted-foreground mt-3 grid place-items-center rounded-sm font-light">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <CircleHelp />
              </EmptyMedia>

              <EmptyTitle>아직 입력한 정답이 없어요</EmptyTitle>

              <EmptyDescription>
                아이돌 이름을 입력하고 정답을 맞혀보세요 !
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          guesses.map((guess, index) => (
            <div
              key={guess.idol.id}
              className="mt-3 grid h-13 grid-cols-[50px_120px_70px_1fr_1fr_70px] gap-2 text-center text-sm"
            >
              {/* 횟수 */}
              <div className="bg-card grid h-full place-items-center rounded-sm text-xl text-amber-600 italic dark:text-amber-200">
                {guesses.length - index}
              </div>

              {/* 이름 */}
              <div className="bg-muted/60 text-muted-foreground/80 grid h-full place-items-center rounded-sm">
                {guess.idol.name}
              </div>

              {/* 성별 */}
              <div
                className={cn(
                  "grid h-full place-items-center rounded-sm",
                  guess.compareResults.gender
                    ? "border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-300/50 dark:bg-blue-950 dark:text-blue-300"
                    : "bg-muted/60 text-muted-foreground/80",
                )}
              >
                {guess.idol.gender === "male" ? "남" : "여"}
              </div>

              {/* 소속사 */}
              <div
                className={cn(
                  "grid h-full place-items-center rounded-sm",
                  guess.compareResults.agency
                    ? "border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-300/50 dark:bg-blue-950 dark:text-blue-300"
                    : "bg-muted/60 text-muted-foreground/80",
                )}
              >
                {guess.idol.agency.replace(" Entertainment", " Ent.")}
              </div>

              {/* 그룹 */}
              <div
                className={cn(
                  "grid h-full place-items-center rounded-sm",
                  guess.compareResults.group
                    ? "border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-300/50 dark:bg-blue-950 dark:text-blue-300"
                    : "bg-muted/60 text-muted-foreground/80",
                )}
              >
                {guess.idol.group}
              </div>

              {/* 나이 */}
              <div
                className={cn(
                  "grid h-full place-items-center rounded-sm",
                  guess.compareResults.birthDate === "same"
                    ? "border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-300/50 dark:bg-blue-950 dark:text-blue-300"
                    : "bg-muted/60 text-muted-foreground/80",
                )}
              >
                <div className="flex items-center gap-0.5">
                  {calculateAge(guess.idol.birthDate)}

                  {guess.compareResults.birthDate === "older" ? (
                    <ChevronsUp className="size-5 text-blue-600 dark:text-blue-500" />
                  ) : guess.compareResults.birthDate === "younger" ? (
                    <ChevronsDown className="size-5 text-red-600 dark:text-red-500" />
                  ) : null}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GuessTable;
