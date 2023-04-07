import { useManageFeedbackList } from "@/graphql/queries/manageFeedbackList";
import { FC } from "react";

const ManageFeedbackList: FC = () => {
  const { data: feedbackList } = useManageFeedbackList();

  return (
    <main>
      {feedbackList?.map((item) => (
        <pre>{JSON.stringify(item, null, 2)}</pre>
      ))}
    </main>
  );
};

export default ManageFeedbackList;
