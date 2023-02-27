import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ElementType, ReactNode, FC } from "react";

interface RatingChipProps extends VariantProps<typeof RatingChipCVA> {
  rating: number;
}

const RatingChipCVA = cva("rounded-lg border-2 border-green-600   px-2", {
  variants: {
    intent: {
      Excellent: "bg-green-200",
      VeryGood: "bg-green-400",
      Good: "bg-blue-400",
      Fair: "bg-blue-500",
      Poor: "bg-red-500",
    },
  },
  defaultVariants: {
    intent: "Poor",
  },
});

const RatingChip: FC<RatingChipProps> = ({ rating }) => {
  let intent: VariantProps<typeof RatingChipCVA>["intent"];

  if (rating >= 4 && rating <= 5) {
    intent = "Excellent";
  } else if (rating >= 3 && rating < 4) {
    intent = "VeryGood";
  } else if (rating > 2 && rating < 3) {
    intent = "Good";
  } else if (rating > 1 && rating <= 2) {
    intent = "Fair";
  } else {
    intent = "Poor";
  }
  return (
    <div className={RatingChipCVA({ intent })}>
      <h1>{rating}/5</h1>
    </div>
  );
};

export default RatingChip;
// subjects,dept_subjects,questions
