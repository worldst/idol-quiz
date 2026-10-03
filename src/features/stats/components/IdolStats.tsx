import { Trophy } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IdolStats as IdolStatsType } from "@/features/stats/types/game-stats";

interface IdolStatsProps {
  stats: IdolStatsType[];
}

const IdolStats = ({ stats }: IdolStatsProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Trophy className="size-4 text-indigo-500" />

          <CardTitle className="text-base">아이돌별 통계</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        {stats.length === 0 ? (
          <div className="text-muted-foreground flex h-[250px] items-center justify-center text-sm">
            아직 게임 기록이 없습니다.
          </div>
        ) : (
          <div className="divide-y">
            {stats.slice(0, 6).map((stat, index) => (
              <div
                key={stat.idolId}
                className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              >
                <span className="text-muted-foreground w-5 text-center text-xs font-medium">
                  {index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {stat.idolName}
                  </p>

                  <p className="text-muted-foreground mt-0.5 text-xs">
                    {stat.games}게임
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-sm font-semibold">
                    {stat.averageGuesses.toFixed(1)}회
                  </p>

                  <p className="text-muted-foreground text-xs">평균 시도</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IdolStats;
