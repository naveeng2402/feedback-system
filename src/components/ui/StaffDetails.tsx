import { FC } from "react";

interface StaffDetailsProps {
  designation: string;
  professorName: string;
  staffId: string;
  department: string;
}

const StaffDetails: FC<StaffDetailsProps> = ({
  designation,
  professorName,
  staffId,
  department,
}) => {
  return (
    <div className="rounded-lg border-2 border-[#B1C1FD] bg-[#E0EDFF]">
      <div className="grid grid-cols-12 gap-6 p-4">
        <p className="col-span-2 min-w-fit rounded-lg border-2 border-[#B1C1FD] px-1 text-center text-[#6B6B6B]">
          {designation}
        </p>
        <p className="col-span-10 font-sans font-bold text-[#556085]">
          {professorName}
        </p>
      </div>
      <div className="grid grid-cols-2 px-4 py-2 font-semibold text-[#556085]">
        <p className="">Staff ID: {staffId}</p>
        <p>Department: {department}</p>
      </div>
    </div>
  );
};

export default StaffDetails;
