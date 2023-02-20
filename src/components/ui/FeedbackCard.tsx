import { FC } from "react";
import Button from "@ui/Button";

interface fcProps {
  data: string;
}

const FeedbackCard: FC<fcProps> = ({ data }) => {
  return (
    <div className=" grid w-full place-items-center rounded border-2 border-blue-300 ">
      <div className="py-6 text-center text-xl font-bold text-blue-500 ">
        <h1>Student Feedback Form</h1>
        <h1 className="">({data})</h1>
      </div>
      <div className="py-6">
        <Button>Give Feedback</Button>
      </div>
    </div>
  );
};

export default FeedbackCard;
