import ROUTES from "@/constants/route";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";

interface Props {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
    const iconClass = getDeviconClassName(name)

  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between">
      <Badge className="rounded-lg bg-slate-500">
        <div className="flex justify-center items-center space-x-2">
          <i className={`${iconClass}`}></i>
          <span className="text-black">{name}</span>
        </div>
      </Badge>

      {showCount && <p>{questions}</p>}
    </Link>
  );
};

export default TagCard;
