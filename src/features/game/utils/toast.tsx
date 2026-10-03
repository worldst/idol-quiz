import { CircleAlert, CircleX } from "lucide-react";
import { toast } from "sonner";

export const showNotFoundToast = (name: string) => {
  toast.error("아이돌을 찾을 수 없습니다.", {
    icon: <CircleX className="!text-destructive size-4" />,
    description: `"${name}"은(는) 현재 목록에 없습니다.`,
    position: "top-center",
    duration: 1500,
    classNames: {
      toast: "!border-destructive/50",
      title: "!text-destructive",
      description: "!text-muted-foreground",
    },
  });
};

export const showDuplicateToast = () => {
  toast.warning("이미 입력한 아이돌입니다.", {
    icon: (
      <CircleAlert className="size-4 !text-green-700 dark:!text-green-100" />
    ),
    // description: "다른 아이돌 이름을 입력해주세요.",
    position: "top-center",
    duration: 1500,
    classNames: {
      toast: "!border-green-700 dark:!border-green-100",
      title: "!text-green-700 dark:!text-green-100",
      // description: "!text-muted-foreground",
    },
  });
};
