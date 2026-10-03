import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Outlet, useLocation,useNavigate } from "react-router";

import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { theme, setTheme } = useTheme();

  const pageInfo: Record<
    string,
    {
      title: string;
      description: string;
    }
  > = {
    "/": {
      title: "아이돌 퀴즈",
      description: "RANDOM IDOL QUIZ",
    },
    "/idol-quiz": {
      title: "게임 시작하기",
      description: "GUESS THE IDOL",
    },
    "/stats": {
      title: "통계",
      description: "QUIZ STATISTICS",
    },
    "/idol-book": {
      title: "아이돌 도감",
      description: "IDOL COLLECTION",
    },
    "/about": {
      title: "만든 사람",
      description: "ABOUT THE DEVELOPER",
    },
  };

  const { title, description } = pageInfo[location.pathname] ?? {
    title: "아이돌 퀴즈",
    description: "RANDOM IDOL QUIZ",
  };

  return (
    <div className="mx-auto w-full p-5 sm:px-10 sm:py-5">
      <ScrollToTop />
      <header className="bg-card mb-3 flex h-12 items-center justify-between rounded-xl border px-3 shadow-sm">
        {/* 뒤로가기 */}
        {location.pathname !== "/" ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft />
          </Button>
        ) : (
          <div className="size-9"></div>
        )}

        {/* 타이틀 */}
        <div className="flex gap-2 text-center">
          <div className="flex flex-col">
            <span className="text-sm leading-none font-semibold">{title}</span>
            <span className="text-muted-foreground mt-1 text-[10px]">
              {description}
            </span>
          </div>
        </div>

        {/* 다크모드 */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted hover:text-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </header>

      <Outlet />
    </div>
  );
};

export default RootLayout;
