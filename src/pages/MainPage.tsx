import {
  BarChart3,
  BookOpen,
  Gamepad2,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";

import { Card, CardContent } from "@/components/ui/card";

const MainPage = () => {
  return (
    <div className="space-y-6">
      {/* 소개 */}
      <section className="mb-4 rounded-2xl border border-indigo-500/10 bg-indigo-500/10 px-6 py-8 text-center dark:border-indigo-400/10 dark:bg-indigo-500/10">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-sm">
          <Target className="size-7" />
        </div>

        <h2 className="mt-4 text-2xl font-bold">랜덤 아이돌 맞추기</h2>

        <p className="text-muted-foreground mt-2 text-sm">
          주어진 힌트를 보고 정답을 찾아보세요!
        </p>

        <div className="mt-5 flex justify-center gap-2 text-xs">
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-900/60 dark:text-indigo-300">
            나이
          </span>

          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-900/60 dark:text-indigo-300">
            그룹
          </span>

          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-900/60 dark:text-indigo-300">
            소속사
          </span>

          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-900/60 dark:text-indigo-300">
            성별
          </span>
        </div>
      </section>

      {/* 메뉴 */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* 게임 시작하기 */}
        <Link to="/idol-quiz">
          <Card className="group h-full cursor-pointer py-2 transition-all hover:-translate-y-0.5 hover:border-indigo-600 hover:shadow-md">
            <CardContent className="flex flex-col justify-between p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Gamepad2 className="size-5" />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">게임 시작하기</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  랜덤으로 선택된 아이돌을 맞혀보세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 아이돌 도감 */}
        <Link to="/idol-book">
          <Card className="group h-full cursor-pointer py-2 transition-all hover:-translate-y-0.5 hover:border-violet-600 hover:shadow-md">
            <CardContent className="flex flex-col justify-between p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <BookOpen className="size-5" />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">아이돌 도감</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  게임에 등장하는 아이돌 정보를 확인해보세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 통계 */}
        <Link to="/stats">
          <Card className="group h-full cursor-pointer py-2 transition-all hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-md">
            <CardContent className="flex flex-col justify-between p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <BarChart3 className="size-5" />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">통계</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  나의 퀴즈 기록과 결과를 확인해보세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 만든 사람 */}
        <Link to="/about">
          <Card className="group h-full cursor-pointer py-2 transition-all hover:-translate-y-0.5 hover:border-orange-600 hover:shadow-md">
            <CardContent className="flex flex-col justify-between p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <UserRound className="size-5" />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">만든 사람</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  이 게임을 만든 개발자를 소개합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* 하단 안내 */}
      <div className="text-muted-foreground flex items-center justify-center gap-2 text-xs">
        <Sparkles className="size-3.5" />
        <span>재미있게 아이돌 지식을 테스트해보세요.</span>
      </div>
    </div>
  );
};

export default MainPage;
