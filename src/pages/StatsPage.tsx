import { useGuessStore } from "@/features/game/stores/useGuessStore";
import AttemptStats from "@/features/stats/components/AttemptStats";
import GroupStats from "@/features/stats/components/GroupStats";
import IdolStats from "@/features/stats/components/IdolStats";
import RecentGames from "@/features/stats/components/RecentGames";
import StatsHeader from "@/features/stats/components/StatsHeader";
import StatsSummary from "@/features/stats/components/StatsSummary";
import { calculateGroupStats } from "@/features/stats/utils/calculateGroupStats";
import { calculateIdolStats } from "@/features/stats/utils/calculateIdolStats";
import { calculateStats } from "@/features/stats/utils/calculateStats";
import { mockIdols } from "@/mocks/idols";

const StatsPage = () => {
  const games = useGuessStore((state) => state.gameHistory);
  const stats = calculateStats(games);
  const idolStats = calculateIdolStats(games, mockIdols);
  const groupStats = calculateGroupStats(games, mockIdols);

  return (
    <div className="mx-auto flex w-full flex-col gap-4">
      <StatsHeader />
      <StatsSummary {...stats} />

      <div className="grid gap-4 md:grid-cols-2">
        <AttemptStats games={games} />
        <RecentGames games={games} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <IdolStats stats={idolStats} />
        <GroupStats stats={groupStats} />
      </div>
    </div>
  );
};

export default StatsPage;
