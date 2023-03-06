import { FC, MouseEventHandler } from "react";
import Button from "@ui/Button";

interface FeedbackCardProps {
  title: string;
  subtitle?: string;
  action: MouseEventHandler<HTMLButtonElement>;
}

const FeedbackCard: FC<FeedbackCardProps> = ({ title, subtitle, action }) => {
  return (
    <div className="w-full place-items-center space-y-12 rounded-xl border-2 border-blue-300 p-8 text-2xl">
      <div className="text-center font-bold text-blue-800 ">
        <p>{title}</p>
        {subtitle && <p className="">{subtitle}</p>}
      </div>
      <div className="mx-auto w-fit">
        <Button onClick={action}>Give Feedback</Button>
      </div>
    </div>
  );
};

export default FeedbackCard;
