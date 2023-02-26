import { FC } from "react";
import { ReactComponent as ArrowLong } from "@icons/ArrowLong.svg";
const data = [
  {
    id: 0,
    label: "Subcode Name",
    url: "#",
    disabled: true,
  },
  {
    id: 0,
    label: "Subcode Name",
    url: "#",
    disabled: false,
  },
  {
    id: 0,
    label: "Subcode Name",
    url: "#",
    disabled: false,
  },
  {
    id: 0,
    label: "Subcode Name",
    url: "#",
    disabled: false,
  },
  {
    id: 0,
    label: "Subcode Name",
    url: "#",
    disabled: false,
  },
];

const FeedbackList: FC = () => {
  return (
    <main className="space-y-4">
      {data.map((val) => (
        <button
          key={val.id}
          disabled={val.disabled}
          className="flex w-full justify-between gap-4 rounded-xl border border-blue-200 stroke-blue-600 p-4 text-blue-800 disabled:cursor-not-allowed disabled:border-blue-100 disabled:bg-blue-50 disabled:stroke-blue-300 disabled:text-blue-400"
        >
          <p className="text-base">{val.label}</p>
          <ArrowLong className="h-8 w-8 -translate-y-0.5 " />
        </button>
      ))}
    </main>
  );
};

export default FeedbackList;
