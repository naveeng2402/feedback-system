import { FC, useContext } from "react";
import { ReactComponent as E403 } from "@icons/E403.svg";
import Button from "@ui/Button";
import { AuthContext, IAuthContext } from "@/context/auth";
import { NavLink } from "react-router-dom";

const Error403: FC = () => {
  const { auth } = useContext(AuthContext) as IAuthContext;
  let redirect: string = "";

  switch (auth.user?.user_metadata.role) {
    case "stud":
      redirect = "/stud/dashboard";
      break;
    case "admin":
      redirect = "/admin/dashboard/";
      break;
    default:
      break;
  }

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
        <Button as={NavLink} to={redirect}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Error403;
