import { useManageFeedbackList } from "@/graphql/queries/manageFeedbackList";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FeedbackDataItem } from "../stud/Feedback";

const ManageFeedbackList: FC = () => {
  const { data: feedbackList } = useManageFeedbackList();

  return (
    <main className="mx-4 space-y-4">
      {feedbackList?.map((item) => (
        <NavLink
          to={`/admin/feedback/${item.id}`}
          className="block rounded border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4"
        >
          <h2 className="text-lg font-bold text-[#556085]">{`${item.department} - ${item.batch}`}</h2>
          <FeedbackDataItem prompt="Semester" value={item.sem} />
          <FeedbackDataItem prompt="Created Date" value={item.created_at} />
        </NavLink>
      ))}
    </main>
  );
};

export default ManageFeedbackList;
