import { Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { groupStyles } from "@/constants/groups";
import type { GuessResult, Idol } from "@/types/idol";

interface QuizResultDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  idol: Idol;
  guesses: GuessResult[];
  onNextQuiz: () => void;
}

const QuizResultDrawer = ({
  open,
  onOpenChange,
  idol,
  guesses,
  onNextQuiz,
}: QuizResultDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} dismissible={false}>
      <DrawerContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DrawerHeader className="text-center">
          <div className="mb-1 flex items-center justify-center gap-2">
            <Trophy className="size-6 text-amber-500" />

            <DrawerTitle className="text-2xl font-bold">
              정답입니다!
            </DrawerTitle>
          </div>

          <DrawerDescription className="flex items-center justify-center text-center">
            <Badge className="mr-1 bg-amber-500/10 text-sm text-amber-600 hover:bg-amber-500/10 dark:text-amber-400">
              {guesses.length}번
            </Badge>
            만에 아이돌을 맞혔어요.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-2 px-6">
          {/* 사진 */}
          <div className="flex justify-center">
            <div className="size-60 overflow-hidden rounded-2xl border shadow-md sm:size-85">
              <img
                src={idol.img}
                alt={idol.name}
                className="h-full w-full scale-110 object-cover"
              />
            </div>
          </div>

          {/* 정보 */}
          <div className="mb-1 text-center">
            <h3 className="text-xl font-bold tracking-tight">{idol.name}</h3>

            <p className="text-muted-foreground mt-1 text-xs">
              {idol.birthDate}
            </p>

            <div className="mt-1 flex items-center justify-center gap-2 text-sm">
              <Badge className={groupStyles[idol.group]}>{idol.group}</Badge>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-muted-foreground">{idol.agency}</span>
            </div>
          </div>

          <div className="border-t pt-3">
            <p className="text-muted-foreground text-xs">입력한 정답</p>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {[...guesses].reverse().map((guess, index) =>
                index === guesses.length - 1 ? (
                  <Badge
                    key={guess.idol.id}
                    className="bg-indigo-200 text-indigo-800 dark:bg-indigo-800/70 dark:text-indigo-200"
                  >
                    {guess.idol.name}
                  </Badge>
                ) : (
                  <Badge key={guess.idol.id} variant="secondary">
                    {guess.idol.name}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>

        <DrawerFooter>
          <Button onClick={onNextQuiz}>다음 게임</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default QuizResultDrawer;
