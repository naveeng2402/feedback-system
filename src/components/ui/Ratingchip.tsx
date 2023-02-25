import { FC } from "react";
interface RCProps {
  rating: string;
}

const Ratingchip: FC<RCProps> = ({ rating }) => {
  return (
    <div className="rounded-lg border-2 border-green-600 bg-green-200 px-1">
      <h1>{rating}/5</h1>
    </div>
  );
};

export default Ratingchip;
