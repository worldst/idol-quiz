import { Card } from "@/components/ui/card";

const StatsHeader = () => {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent p-6">
        <p className="text-sm font-medium text-indigo-500">QUIZ STATISTICS</p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight">통계</h1>

        <p className="text-muted-foreground mt-2 text-sm">
          지금까지 플레이한 게임 기록을 확인해보세요.
        </p>
      </div>
    </Card>
  );
};

export default StatsHeader;
