import { ChartColumn } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface AttemptStatsProps {
  games: {
    guesses: number;
  }[];
}

const AttemptStats = ({ games }: AttemptStatsProps) => {
  const distribution = games.reduce<Record<number, number>>((acc, game) => {
    acc[game.guesses] = (acc[game.guesses] ?? 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(distribution)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([guesses, count]) => ({
      guesses: `${guesses}회`,
      count,
    }));

  const chartConfig = {
    count: {
      label: "게임",
      color: "#6366f1",
    },
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <ChartColumn className="size-4 text-indigo-500" />

          <CardTitle className="text-base">시도 횟수 통계</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        {chartData.length === 0 ? (
          <div className="text-muted-foreground flex h-[250px] items-center justify-center text-sm">
            아직 게임 기록이 없습니다.
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="guesses"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />

              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              <Bar dataKey="count" radius={6} fill="var(--color-count)" />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default AttemptStats;
