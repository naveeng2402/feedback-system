import FeedbackCard from "@ui/FeedbackCard";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const DashBoard: FC = () => {
  return (
    <main className="space-y-8">
      <FeedbackCard data="course" action={() => {}} />
      <FeedbackCard data="lab" action={() => {}} />
    </main>
  );
};

export default DashBoard;
