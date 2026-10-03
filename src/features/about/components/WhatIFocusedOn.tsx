import { Lightbulb } from "lucide-react";

import { Card } from "@/components/ui/card";

const WhatIFocusedOn = () => {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      <section className="p-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="size-5 text-indigo-500" />
          <p className="text-sm font-medium text-indigo-500">
            WHAT I FOCUSED ON
          </p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <div>
            <h3 className="relative inline-block pb-1 text-sm font-semibold">
              컴포넌트 설계
              <span className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-indigo-500" />
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              기능과 역할을 기준으로 컴포넌트를 분리하고 재사용성을
              고려했습니다.
            </p>
          </div>

          <div>
            <h3 className="relative inline-block pb-1 text-sm font-semibold">
              상태 관리
              <span className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-indigo-500" />
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              Zustand를 활용해 게임 진행에 필요한 상태를 관리하고 컴포넌트 간
              의존성을 줄였습니다.
            </p>
          </div>

          <div>
            <h3 className="relative inline-block pb-1 text-sm font-semibold">
              사용자 경험
              <span className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-indigo-500" />
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              자동완성, 토스트, 반응형 UI 등을 적용해 입력 과정이 자연스럽도록
              구성했습니다.
            </p>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default WhatIFocusedOn;
