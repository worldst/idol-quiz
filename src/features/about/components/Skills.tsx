import { Code2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import SkillGroup from "@/features/about/components/SkillGroup";
import { skillsGroup } from "@/features/about/constants/skills";

const Skills = () => {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      <section className="p-6">
        <div className="flex items-center gap-2">
          <Code2 className="size-4 text-indigo-500" />

          <p className="text-sm font-medium text-indigo-500">SKILLS</p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {skillsGroup.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </section>
    </Card>
  );
};

export default Skills;
