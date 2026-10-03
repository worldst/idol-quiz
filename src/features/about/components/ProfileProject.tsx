import { Rocket } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import profileImage from "@/assets/profile/profile.jpg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ProfileProject = () => {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent p-6">
        <p className="text-sm font-medium text-indigo-500">
          ABOUT THE DEVELOPER
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight">만든 사람</h1>

        <p className="text-muted-foreground mt-2 text-sm">
          이 게임을 만든 개발자와 프로젝트를 소개합니다.
        </p>
      </div>

      <CardContent className="border-t p-0">
        {/* Profile + Project */}
        <div className="grid md:my-6 md:grid-cols-2">
          {/* Profile */}
          <section className="border-b p-6 md:border-r md:border-b-0">
            <div className="flex flex-col items-center text-center">
              <img
                src={profileImage}
                alt="프로필 사진"
                className="size-42 rounded-full object-cover ring-4 ring-indigo-500/10"
              />

              <h2 className="mt-4 text-xl font-bold">문귀현</h2>

              <p className="text-muted-foreground mt-1 text-sm">
                Frontend Developer
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="rounded-full border-indigo-200 bg-indigo-50 px-3 py-1 text-xs text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  1993. 12. 8
                </Badge>

                <Badge
                  variant="outline"
                  className="rounded-full border-indigo-200 bg-indigo-50 px-3 py-1 text-xs text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  ISTJ
                </Badge>
              </div>

              <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-6 break-keep">
                사용자 경험과 UI를 고민하며 React와 TypeScript를 활용해 서비스를
                만들어가는 개발자입니다.
              </p>

              <a
                href="https://github.com/worldst"
                target="_blank"
                className="text-muted-foreground group hover:text-foreground mt-5 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <FaGithub className="size-5" />
                <span className="group-hover:border-foreground border-b border-transparent transition-colors">
                  GitHub
                </span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </section>

          {/* Project */}
          <section className="p-6">
            <div className="flex items-center gap-2">
              <Rocket className="size-5 text-indigo-500" />

              <p className="text-sm font-medium text-indigo-500">PROJECT</p>
            </div>

            <h2 className="mt-3 text-2xl font-bold">랜덤 아이돌 맞추기</h2>

            <p className="text-muted-foreground v mt-3 text-sm leading-6 break-keep">
              React와 TypeScript를 활용해 직접 설계하고 구현한 아이돌 이름
              맞추기 게임입니다.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Zustand</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>shadcn/ui</Badge>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold">주요 기능</p>

              <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
                <li>• 아이돌 입력 시 자동완성</li>
                <li>• 입력한 아이돌과 정답 비교</li>
                <li>• 그룹별 아이돌 도감</li>
                <li>• 반응형 UI 및 다크 모드</li>
              </ul>

              <a
                href="https://github.com/worldst/idol-quiz"
                target="_blank"
                className="text-muted-foreground group hover:text-foreground mt-7 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <FaGithub className="size-5" />
                <span className="group-hover:border-foreground border-b border-transparent transition-colors">
                  GitHub Repository
                </span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileProject;
