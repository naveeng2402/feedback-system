import { FC } from "react";
import { ReactComponent as Vector } from "@icons/Vector.svg";

interface WCprops {
  data: string;
}

const WarningCard: FC<WCprops> = ({ data }) => {
  return (
    <div className="flex items-center justify-start gap-4  rounded-lg bg-[#FFF3E6] px-4 py-4">
      <Vector className="h-12 w-12" />
      <p className="text-[#DC7704]">{data}</p>
    </div>
  );
};

export default WarningCard;
