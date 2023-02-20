import { useLocation } from "react-router-dom";

const DashBoard = () => {
  const location = useLocation();
  return (
    <div>
      <p>Dashboard</p>
      <p>{location.pathname}</p>
    </div>
  );
};

export default DashBoard;
