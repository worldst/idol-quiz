import { BookAlert, CornerDownLeft, Tags } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Kbd } from "@/components/ui/kbd";
import { groups, groupStyles } from "@/constants/groups";

const GameDescription = () => {
  return (
    <Card className="w-full gap-0 p-0">
      <CardHeader className="flex items-center gap-2 rounded-t-xl border-b bg-indigo-100 !py-4 text-indigo-700 dark:bg-indigo-800/20 dark:text-indigo-300">
        <BookAlert className="size-5" />
        <CardTitle>게임 설명</CardTitle>
      </CardHeader>

      <CardContent className="text-muted-foreground space-y-3 p-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-500">
            1
          </span>

          <p>
            아래의{" "}
            <strong className="text-indigo-600 dark:text-indigo-300">
              입력 가능한 그룹 목록
            </strong>
            을 확인해주세요.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-500">
            2
          </span>

          <p>
            이름을 입력하고{" "}
            <strong className="text-indigo-600 dark:text-indigo-300">
              정답 입력
            </strong>
            을 누르거나{" "}
            <Kbd className="bg-indigo-50 px-2 font-bold text-indigo-600 dark:bg-indigo-800/30 dark:text-indigo-300">
              Enter <CornerDownLeft className="size-3" />
            </Kbd>{" "}
            키를 눌러주세요.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-500">
            3
          </span>

          <p>입력한 정보가 정답과 얼마나 가까운지 확인할 수 있어요.</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-500">
            4
          </span>

          <p>정답을 맞히면 다음 문제를 진행할 수 있어요.</p>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start gap-3 border-t !p-4">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
          <Tags className="size-4" />
          <span className="text-xs font-medium">입력 가능한 그룹 목록</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {groups.map((group) => (
            <Badge key={group} className={groupStyles[group]}>
              {group}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default GameDescription;
