import { Gamepad2, Hash, Medal, Target } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface StatsSummaryProps {
  totalGames: number;
  totalGuesses: number;
  averageGuesses: number | null;
  bestScore: number | null;
}

const StatsSummary = ({
  totalGames,
  totalGuesses,
  averageGuesses,
  bestScore,
}: StatsSummaryProps) => {
  const stats = [
    {
      label: "총 게임",
      value: totalGames,
      description: "플레이 횟수",
      icon: Gamepad2,
    },
    {
      label: "평균 시도",
      value: averageGuesses === null ? "-" : `${averageGuesses.toFixed(1)}회`,
      description: "게임당 평균",
      icon: Target,
    },
    {
      label: "최고 기록",
      value: bestScore === null ? "-" : `${bestScore}회`,
      description: "최소 시도 횟수",
      icon: Medal,
    },
    {
      label: "총 시도",
      value: totalGuesses,
      description: "전체 입력 횟수",
      icon: Hash,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map(({ label, value, description, icon: Icon }) => (
        <Card
          key={label}
          className="group relative overflow-hidden p-0 transition-shadow hover:shadow-md"
        >
          <CardContent className="relative p-5">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm font-medium">
                {label}
              </p>

              <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500/10">
                <Icon className="size-4 text-indigo-500" />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-3xl font-bold tracking-tight">{value}</p>

              <p className="text-muted-foreground mt-1.5 text-xs">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsSummary;
