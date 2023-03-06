import FeedbackCard from "@ui/FeedbackCard";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const DashBoard: FC = () => {
  const title = "Student Feedback Form";
  return (
    <main className="space-y-8">
      <FeedbackCard title={title} subtitle="(Course)" action={() => {}} />
      <FeedbackCard title={title} subtitle="(Lab)" action={() => {}} />
    </main>
  );
};

export default DashBoard;
