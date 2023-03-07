import { FC } from "react";
import { ReactComponent as E403 } from "@icons/E403.svg";
import Button from "@ui/Button";

const Error404: FC = () => {
  return (
    <div className="">
      <div className="grid place-items-center pt-56">
        <E403 className="" />
      </div>
      <div className=" py-10 text-center">
        <p className="py-2 text-[#556085]">Oops! Access Denied.</p>
        <p className="text-[#A9A9A9]">
          Looks like you don't have permission to access this resource.
        </p>
      </div>
      <div className="grid place-items-center py-10">
        <Button className="">Go Back</Button>
      </div>
    </div>
  );
};

export default Error404;
