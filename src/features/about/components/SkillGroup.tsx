import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  icon: React.ElementType;
};

interface SkillGroupProps {
  title: string;
  skills: readonly Skill[];
}

const SkillGroup = ({ title, skills }: SkillGroupProps) => {
  return (
    <div>
      <h3 className="relative inline-block pb-1 text-sm font-semibold">
        {title}
        <span className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-indigo-500" />
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map(({ name, icon: Icon }) => (
          <Badge
            key={name}
            variant="outline"
            className="border-border/70 bg-muted/30 text-foreground/80 rounded-md px-3 py-1 font-medium shadow-sm transition-colors hover:border-indigo-500/30 hover:bg-indigo-500/5"
          >
            <Icon className="mr-1 size-3.5 text-indigo-500" />
            {name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
