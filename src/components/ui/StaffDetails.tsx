import { FC } from "react";

interface StaffDetailsProps {
  designation: string;
  professorname: string;
  staffid: string;
  dept: string;
}

const StaffDetails: FC<StaffDetailsProps> = ({
  designation,
  professorname,
  staffid,
  dept,
}) => {
  return (
    <div className="rounded-lg border-2 border-[#B1C1FD] bg-[#E0EDFF]">
      <div className="flex gap-2 p-4">
        <p className="rounded-lg border-2 border-[#B1C1FD] px-1 text-[#6B6B6B]">
          {designation}
        </p>
        <p className="font-sans font-bold text-[#556085]">{professorname}</p>
      </div>
      <div className="grid grid-cols-2 px-4 py-2 font-semibold text-[#556085]">
        <p className="">Staff ID: {staffid}</p>
        <p>Department: {dept}</p>
      </div>
    </div>
  );
};

export default StaffDetails;
