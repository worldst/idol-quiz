export const groups = [
  "RIIZE",
  "aespa",
  "LE SSERAFIM",
  "BTS",
  "Stray Kids",
  "TWICE",
] as const;

export const groupTabs = ["all", ...groups] as const;

export type Group = (typeof groups)[number];
export type GroupTab = (typeof groupTabs)[number];

export const groupStyles = {
  RIIZE: "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  aespa:
    "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300",
  "LE SSERAFIM":
    "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  BTS: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "Stray Kids":
    "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  TWICE:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
} satisfies Record<Group, string>;
