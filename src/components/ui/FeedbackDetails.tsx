import { FC } from "react";

interface FeedbackDetails {
  ProfessorName: string;
  SubjectName: string;
  batch: string;
  Semester: number;
  Section: string;
  Department: string;
  yearButton?: React.ReactNode;
}

const FeedbackDetails: FC<FeedbackDetails> = ({
  ProfessorName,
  SubjectName,
  batch,
  Semester,
  Section,
  Department,
  yearButton,
}) => {
  return (
    <div className="rounded-xl border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4 ">
      <div className=" p-2 text-[#2a3d7a]">
        <p className="text-lg font-bold ">{ProfessorName}</p>
        <p className="text-sm font-semibold">{SubjectName}</p>
      </div>
      <div className=" grid grid-cols-2 gap-y-2 py-4 px-2 text-[#364267]">
        <p>Batch: {batch}</p>
        <p>Semester: {Semester}</p>
        <p>Section: {Section}</p>
        <p>Department: {Department}</p>
      </div>
      <p className="px-2 text-[#486CEC]">{yearButton}</p>
    </div>
  );
};

export default FeedbackDetails;
