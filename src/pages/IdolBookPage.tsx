import { Users } from "lucide-react";
import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { groupTabs } from "@/constants/groups";
import IdolCard from "@/features/idol-book/components/IdolCard";
import { mockIdols } from "@/mocks/idols";

const IdolBookPage = () => {
  const [selectedGroup, setSelectedGroup] = useState("all");

  const filteredIdols =
    selectedGroup === "all"
      ? mockIdols
      : mockIdols.filter((idol) => idol.group === selectedGroup);

  return (
    <div className="mx-auto w-full">
      <Tabs value={selectedGroup} onValueChange={setSelectedGroup}>
        {/* Header + Tabs */}
        <div className="bg-card overflow-hidden rounded-xl border">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-indigo-500">
                  IDOL COLLECTION
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight">
                  아이돌 도감
                </h1>

                <p className="text-muted-foreground mt-2 text-sm">
                  게임에 등장하는 아이돌들의 프로필을 확인해보세요.
                </p>
              </div>

              <div className="hidden text-right sm:block">
                <p className="text-3xl font-bold">{mockIdols.length}</p>
                <p className="text-muted-foreground text-xs">등록된 아이돌</p>
              </div>
            </div>
          </div>

          {/* Group Tabs */}
          <div className="border-t px-4 py-3">
            <div className="overflow-x-auto overflow-y-hidden">
              <TabsList className="h-11 w-max min-w-full justify-start gap-1 bg-transparent p-0">
                {groupTabs.map((group) => (
                  <TabsTrigger
                    key={group}
                    value={group}
                    className="text-muted-foreground hover:bg-muted/60 hover:text-foreground h-9 cursor-pointer rounded-lg px-4 text-sm font-medium transition-all duration-200 data-[state=active]:border data-[state=active]:border-indigo-200 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm dark:data-[state=active]:!border-indigo-500 dark:data-[state=active]:!bg-indigo-500/30 dark:data-[state=active]:!text-indigo-300"
                  >
                    {group === "all" ? "전체" : group}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
        </div>

        {/* Count */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <Users className="size-4" />
            <span>아이돌 목록</span>
          </div>

          <span className="text-muted-foreground text-sm">
            총{" "}
            <strong className="text-foreground">{filteredIdols.length}</strong>
            명
          </span>
        </div>

        {/* Idol Grid */}
        <div className="mt-1 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filteredIdols.map((idol) => (
            <IdolCard key={idol.id} idol={idol} />
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default IdolBookPage;
