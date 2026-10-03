import { Boxes } from "lucide-react";
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const skillsGroup = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "jQuery", icon: SiJquery },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "UI / State",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Zustand", icon: Boxes },
      { name: "TanStack Query", icon: SiTanstack },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Vite", icon: SiVite },
      { name: "Git", icon: SiGit },    
    ],
  },
  {
    title: "Backend / DB",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
] as const;
