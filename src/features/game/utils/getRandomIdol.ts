import { mockIdols } from "@/mocks/idols";

export const getRandomIdol = () => {
  const randomIndex = Math.floor(Math.random() * mockIdols.length);

  return mockIdols[randomIndex];
};
