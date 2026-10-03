import { Clock3 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GameRecord } from "@/features/game/types/game-record";
import { mockIdols } from "@/mocks/idols";

interface RecentGamesProps {
  games: GameRecord[];
}

const RecentGames = ({ games }: RecentGamesProps) => {
  const idolMap = new Map(mockIdols.map((idol) => [idol.id, idol]));

  const recentGames = games.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Clock3 className="size-4 text-indigo-500" />

          <CardTitle className="text-base">최근 게임</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        {recentGames.length === 0 ? (
          <div className="text-muted-foreground flex h-[250px] items-center justify-center text-sm">
            아직 게임 기록이 없습니다.
          </div>
        ) : (
          <div className="divide-y">
            {recentGames.map((game) => {
              const idol = idolMap.get(game.answerId);

              if (!idol) return null;

              return (
                <div
                  key={game.id}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{idol.name}</p>

                    <p className="text-muted-foreground mt-0.5 text-xs">
                      {new Date(game.playedAt).toLocaleDateString("ko-KR")}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold">{game.guesses}회</p>

                    <p className="text-muted-foreground text-xs">시도</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentGames;
