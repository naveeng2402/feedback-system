import { FC } from "react";
import { ReactComponent as Faculty } from "@icons/Faculty.svg";
import { ReactComponent as Cancel } from "@icons/Cancel.svg";

interface SubjectCard {
  subjectname: string;
  professorname: string;
}

const SubjectCard: FC<SubjectCard> = ({ subjectname, professorname }) => {
  return (
    <div className="rounded-lg border-2 border-[#D0D4E3] p-4">
      <div className="flex items-center gap-8 py-4">
        <Faculty className="" />
        <p className="">{subjectname}</p>
      </div>
      <div className="mx-12">
        <div className="flex  items-center rounded-lg  border-2 border-[#B1C1FD] bg-[#B1C1FD] p-2  ">
          <p className="font-bold text-[#192860]">{professorname}</p>
          <Cancel className="flex-grow" />
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
