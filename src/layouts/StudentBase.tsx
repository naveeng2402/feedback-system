import { FC, useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as Illustration } from "@/assets/illustrations/dashboard.svg";
import { ReactComponent as Logout } from "@icons/Logout.svg";
import { Button } from "@/components/ui";
import { AuthContext, IAuthContext } from "@/context/auth";

const StudentBase: FC = () => {
  const { signOut } = useContext(AuthContext) as IAuthContext;
  const loc = useLocation();

  const [showLogout, setShowLogout] = useState(false);
  useEffect(() => {
    loc.pathname.includes("/stud/dashboard")
      ? setShowLogout(true)
      : setShowLogout(false);
  }, [loc]);

  return (
    <div className="mt-12">
      <div className="flex  min-h-[96vh] flex-col items-center justify-start gap-4 p-2 ">
        <header className="space-y-4 text-center text-4xl text-blue-800">
          Feedback System
        </header>
        {showLogout && (
          <Button
            onClick={signOut}
            className="ml-auto mr-4 flex gap-2 py-2 px-2"
          >
            <span>log out</span>
            <Logout />
          </Button>
        )}
        <Illustration className="max-h-[40vh] w-3/4" />
        <main className="w-full px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentBase;
