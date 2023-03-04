import { FC } from "react";
import { ReactComponent as E404 } from "@icons/E404.svg";
import Button from "@ui/Button";

const Error404: FC = () => {
  return (
    <div className="">
      <div className="justify-content flex items-center pt-56">
        <E404 className="" />
      </div>
      <div className=" py-10 text-center">
        <p className="py-2 text-[#556085]">Oops ! Page not Found</p>
        <p className="text-[#A9A9A9]">
          Seems that the page you are looking for is not exist
        </p>
      </div>
      <div className="grid place-items-center py-10">
        <Button className="">Go Back</Button>
      </div>
    </div>
  );
};

export default Error404;
