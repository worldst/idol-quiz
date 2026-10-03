import type { Group } from "@/constants/groups";

export interface Idol {
  id: number;
  name: string;
  birthDate: string;
  group: Group;
  agency: string;
  gender: "male" | "female";
  img: string;
}

export interface CompareResult {
  birthDate: "older" | "younger" | "same";
  group: boolean;
  agency: boolean;
  gender: boolean;
}

export interface GuessResult {
  idol: Idol;
  compareResults: CompareResult;
}
