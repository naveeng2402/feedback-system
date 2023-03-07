import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ElementType, ReactNode, FC } from "react";

interface RatingChipProps extends VariantProps<typeof RatingChipCVA> {
  rating: number;
}

const RatingChipCVA = cva("rounded-lg border-2  px-4", {
  variants: {
    intent: {
      Excellent: "bg-[#A7DDB3] border-[#4FBA66] text-[#286736]",
      VeryGood: "bg-[#A7DDB3] border-[#4FBA66] text-[#286736]",
      Good: "bg-[#E0EDFF] border-[#B1C1FD] text-[#6B6B6B]",
      Fair: "bg-[#F3A5AA] border-[#EA5D66] text-[#7E1018]",
      Poor: "bg-[#F3A5AA] border-[#EA5D66] text-[#7E1018]",
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
      <p>{rating}/5</p>
    </div>
  );
};

export default RatingChip;
