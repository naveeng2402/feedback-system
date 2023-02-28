import { FC } from "react";
import { ReactComponent as Plus } from "@icons/Plus.svg";

const PlusButton: FC = () => {
  return (
    <div className="px-2">
      <button className="">
        <Plus className="h-16 w-16 rounded-full  bg-blue-800  p-3" />
      </button>
    </div>
  );
};

export default PlusButton;
