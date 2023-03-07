import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Illustration } from "@/assets/illustrations/dashboard.svg";

const StudentBase: FC = () => {
  return (
    <div className="mt-12">
      <div className="flex  min-h-[96vh] flex-col items-center justify-start gap-4 p-2 ">
        <header className="space-y-4 text-center text-4xl text-blue-800">
          Feedback System
        </header>
        <Illustration className="max-h-[40vh] w-3/4" />
        <main className="w-full px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentBase;
