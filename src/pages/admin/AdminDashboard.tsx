import { FC } from "react";
import { ReactComponent as Home } from "@icons/Home.svg";
import { ReactComponent as Logout } from "@icons/Logout.svg";
import { Button } from "@/components/ui";
import NavigationCard from "@/components/ui/NavigationCard";
import { ReactComponent as Admin } from "@icons/Admin.svg";
import { ReactComponent as Faculty } from "@icons/Faculty.svg";
import { ReactComponent as Graph } from "@icons/Graph.svg";
import { ReactComponent as Publish } from "@icons/Publish.svg";
import { ReactComponent as Reports } from "@icons/Reports.svg";

const AdminDashboard: FC = ({}) => {
  return (
    <div>
      <div className="flex items-center justify-end gap-5 py-8 px-6">
        <Home className="flex-2" />
        <h1 className="flex-grow text-3xl font-bold text-[#192860]">Admin</h1>

        <Button className="flex gap-2 py-2 px-2">
          <span>log out</span>
          <Logout />
        </Button>
      </div>

      <Admin className="mx-auto pb-4" />

      <div className="mx-6 grid grid-cols-2 place-items-center gap-x-10  gap-y-8 py-6 ">
        <NavigationCard icons={<Reports />} navigationTo="View Reports" />
        <NavigationCard
          icons={<Faculty />}
          navigationTo="Add staff & designation"
        />
        <NavigationCard icons={<Graph />} navigationTo="View Staff Reports" />
        <NavigationCard icons={<Publish />} navigationTo="Publish Forms" />
      </div>
    </div>
  );
};

export default AdminDashboard;