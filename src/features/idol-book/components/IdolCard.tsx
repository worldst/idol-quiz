import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { groupStyles } from "@/constants/groups";
import type { Idol } from "@/types/idol";
import { calculateAge } from "@/utils/calculateAge";

const IdolCard = ({ idol }: { idol: Idol }) => {
  return (
    <Card className="group gap-1 overflow-hidden p-0">
      <div className="relative overflow-hidden">
        <img
          src={idol.img}
          alt={idol.name}
          className="aspect-square w-full scale-110 object-cover transition-transform duration-300 group-hover:scale-115"
        />

        <div className="absolute top-3 left-3">
          <Badge className={groupStyles[idol.group]}>{idol.group}</Badge>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
          <h3 className="text-xl font-bold text-white sm:text-[22px]">
            {idol.name}
          </h3>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">
            {idol.birthDate}
          </span>

          <Badge variant="secondary">{calculateAge(idol.birthDate)}세</Badge>
        </div>

        <p className="text-muted-foreground mt-2 text-xs">{idol.agency}</p>
      </CardContent>
    </Card>
  );
};

export default IdolCard;
