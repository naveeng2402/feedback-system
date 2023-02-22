import { FC } from "react";
import { Outlet } from "react-router-dom";

const StudentBase: FC = () => {
  return (
    <div>
      StudentBase <Outlet />
    </div>
  );
};

export default StudentBase;
