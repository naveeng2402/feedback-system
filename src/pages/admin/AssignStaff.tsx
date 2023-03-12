import { FC } from "react";
import { ReactComponent as LeftArrow } from "@icons/LeftArrow.svg";
import { Button } from "@/components/ui";
import SubjectCard from "@/components/ui/StaffInput";

const AssignStaff: FC = () => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-start gap-6 px-6">
        <LeftArrow />
        <h1 className="text-3xl font-bold text-[#192860]">Assign Staffs</h1>
      </div>
      <div className="px-5 py-4">
        <SubjectCard
          professorname="Asst Prof. Iranya Pandiyan"
          subjectname="Object Oriented Programming Laboratory (CS8603)"
        />
      </div>
      <div className="grid place-items-center py-5">
        <Button className="px-12">Publish</Button>
      </div>
    </div>
  );
};

export default AssignStaff;
