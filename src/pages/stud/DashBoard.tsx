import FeedbackCard from "@ui/FeedbackCard";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard: FC = () => {
  const title = "Student Feedback Form";

  const navigate = useNavigate();
  return (
    <main className="space-y-8">
      <FeedbackCard
        title={title}
        subtitle="(Course)"
        action={() => {
          navigate("/stud/feedback-list/course");
        }}
      />
      <FeedbackCard
        title={title}
        subtitle="(Lab)"
        action={() => {
          navigate("/stud/feedback-list/lab");
        }}
      />
    </main>
  );
};

export default DashBoard;
