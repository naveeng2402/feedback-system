import { FC, useContext } from "react";
import { ReactComponent as Home } from "@icons/Home.svg";
import { ReactComponent as Logout } from "@icons/Logout.svg";
import { Button } from "@/components/ui";
import NavigationCard from "@/components/ui/NavigationCard";
import { ReactComponent as Admin } from "@icons/Admin.svg";
import { ReactComponent as Faculty } from "@icons/Faculty.svg";
import { ReactComponent as Graph } from "@icons/Graph.svg";
import { ReactComponent as Publish } from "@icons/Publish.svg";
import { ReactComponent as Reports } from "@icons/Reports.svg";
import { ReactComponent as Response } from "@icons/Response.svg";
import { AuthContext, IAuthContext } from "@/context/auth";
import { NavLink } from "react-router-dom";

const AdminDashboard: FC = ({}) => {
  const { signOut } = useContext(AuthContext) as IAuthContext;

  return (
    <div>
      <div className="flex items-center justify-end gap-5 py-8 px-6">
        <Home className="flex-2" />
        <h1 className="flex-grow text-3xl font-bold text-[#192860]">Admin</h1>

        <Button onClick={signOut} className="flex gap-2 py-2 px-2">
          <span>log out</span>
          <Logout />
        </Button>
      </div>

      <Admin className="mx-auto pb-4" />

      <div className="mx-6 grid grid-cols-2 place-items-center gap-x-10  gap-y-8 py-6 ">
        <NavLink to="/admin/reports/stud_course" className="h-full w-full">
          <NavigationCard icons={<Reports />} navigationTo="View Reports" />
        </NavLink>
        <NavLink to="/admin/response-list/employer" className="h-full w-full">
          <NavigationCard
            icons={<Response className="h-8 w-8" />}
            navigationTo="View Responses"
          />
        </NavLink>
        <NavLink to="/admin/staff_management">
          <NavigationCard
            icons={<Faculty className="stroke-[#474E67]" />}
            navigationTo="Add staff & designation"
          />
        </NavLink>
        <NavigationCard icons={<Graph />} navigationTo="View Staff Reports" />
        <NavLink to="/admin/publish-feedback" className="w-full">
          <NavigationCard icons={<Publish />} navigationTo="Publish Forms" />
        </NavLink>
        <NavLink to="/admin/manage-feedback" className="w-full">
          <NavigationCard icons={<Graph />} navigationTo="Manage Forms" />
        </NavLink>
      </div>
    </div>
  );
};

export default AdminDashboard;
