import { FC } from "react";
import { useLocation } from "react-router-dom";

const DashBoard: FC = () => {
  const location = useLocation();
  return (
    <div>
      <p>Dashboard</p>
      <p>{location.pathname}</p>
    </div>
  );
};

export default DashBoard;
