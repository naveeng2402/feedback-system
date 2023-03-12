import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ElementType, ReactNode, FC } from "react";

interface RatingChipProps extends VariantProps<typeof RatingChipCVA> {
  rating: number;
  total?: number;
  className?: string;
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

const RatingChip: FC<RatingChipProps> = ({ rating, total, className }) => {
  let intent: VariantProps<typeof RatingChipCVA>["intent"];
  const _total = total || 5;

  const percentage = (100 * rating) / _total;

  if (percentage >= 60 && percentage <= 100) {
    intent = "Excellent";
  } else if (percentage >= 50 && percentage < 40) {
    intent = "VeryGood";
  } else if (percentage >= 40 && percentage < 30) {
    intent = "Good";
  } else if (percentage >= 30 && percentage < 20) {
    intent = "Fair";
  } else {
    intent = "Poor";
  }
  return (
    <div className={RatingChipCVA({ intent, className })}>
      <p>
        {rating}/{_total}
      </p>
    </div>
  );
};

export default RatingChip;
