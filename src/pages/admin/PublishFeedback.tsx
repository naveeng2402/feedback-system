import { BaseDropdown, Button, Input } from "@/components/ui";
import { useDeptsQuery } from "@/graphql/queries/deptOptions";
import { FC, useEffect, useState } from "react";
import { ReactComponent as Faculty } from "@icons/Faculty.svg";
import { OptionProps } from "@/components/ui/BaseDropdown";
import {
  useStaffListQuery,
  useStaffOptions,
} from "@/graphql/queries/staffList";
import BaseCombobox from "@/components/ui/Combobox";
import { useRegulationsQuery } from "@/graphql/queries/regulations";
import { useDeptSubjectQuery } from "@/graphql/queries/deptSubjectQuery";

interface StaffMappingProps {
  subjectName: string;
  staffOptions: OptionProps[];
  value: OptionProps;
  setValue:
    | React.Dispatch<React.SetStateAction<OptionProps>>
    | ((e: OptionProps) => void);
}
const StaffMapping: FC<StaffMappingProps> = ({
  subjectName,
  staffOptions,
  setValue,
  value,
}) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border-2 border-[#D0D4E3] p-4">
      <Faculty className="stroke-blue-500" />
      <div className="w-full">
        <p>{subjectName}</p>
        <BaseCombobox
          people={staffOptions}
          selected={value}
          setSelected={setValue}
        />
      </div>
    </div>
  );
};

const PublishFeedback: FC = () => {
  interface IStaffMapping {
    [key: string]: OptionProps;
  }

  const { data: deptOptions } = useDeptsQuery();
  const { data: regOptions } = useRegulationsQuery();
  const { data: staffOptions } = useStaffOptions();
  const semesterOptions = [...Array(8).keys()].map((val) => ({
    id: (val + 1).toString(),
    text: (val + 1).toString(),
  }));

  const [batch, setBatch] = useState("2024");
  const [dept, setDept] = useState(deptOptions[0]);
  const [section, setSection] = useState("");
  const [regulation, setRegulation] = useState(regOptions[0]);
  const [sem, setSem] = useState(semesterOptions[0]);
  const [staffMapping, setStaffMapping] = useState<IStaffMapping>({});

  const [showStaffMapping, setShowStaffMapping] = useState(false);
  const [isPublishDisabled, setIsPublishDisabled] = useState(true);

  const { data: deptSubject } = useDeptSubjectQuery(
    dept.id,
    regulation.id,
    sem.id
  );

  useEffect(() => {
    setSection(section.toUpperCase());
  }, [section]);

  useEffect(() => {
    setShowStaffMapping(false);
    deptSubject?.forEach((e) => {
      staffMapping[e.subCode.trim()] = { id: "", text: "" };
    });
    delete staffMapping[""];
  }, [deptSubject]);

  useEffect(() => {
    if (
      Object.values(staffMapping).filter((mapping) => mapping.id === "")
        .length === 0
    ) {
      setIsPublishDisabled(false);
    }
  }, [staffMapping]);

  const handleAssignStaffs = () => {
    setShowStaffMapping(true);
  };

  const handlePublish = () => {
    alert("Published");
  };

  return (
    <main className="mx-4 space-y-4">
      <div className="space-y-4 rounded-xl border-2 p-4">
        <h3 className="text-center text-2xl font-semibold uppercase text-blue-800">
          Feedback Details
        </h3>
        <Input
          id="batch"
          name="Batch"
          placeholder="2024"
          type="number"
          setValue={setBatch}
          value={batch}
        />
        <BaseDropdown
          label="Department"
          options={deptOptions}
          value={dept}
          setValue={setDept}
        />
        <Input
          id="section"
          name="Section"
          placeholder=""
          type="text"
          setValue={setSection}
          value={section}
        />
        <BaseDropdown
          label="Semester"
          options={semesterOptions}
          value={sem}
          setValue={setSem}
        />
        <BaseDropdown
          label="Regulation"
          options={regOptions}
          value={regulation}
          setValue={setRegulation}
        />
        <Button className="mx-auto" onClick={handleAssignStaffs}>
          Assign Staffs
        </Button>
      </div>
      {showStaffMapping && (
        <div className="space-y-4 rounded-xl border-2 p-4">
          <h3 className="text-center text-2xl font-semibold uppercase text-blue-800">
            Staff Mapping
          </h3>
          <section className="space-y-2">
            <h4 className="text-xl font-semibold  text-blue-800">Theory</h4>
            {deptSubject
              ?.filter((sub) => sub.isTheory === true)
              .map((subject) => (
                <StaffMapping
                  key={subject.subCode}
                  subjectName={`${subject.subName} (${subject.subCode})`}
                  staffOptions={staffOptions}
                  value={staffMapping[subject.subCode.trim()]}
                  setValue={(e: OptionProps) => {
                    setStaffMapping((prev) => ({
                      ...prev,
                      [subject.subCode.trim()]: e,
                    }));
                  }}
                />
              ))}
          </section>
          <section className="space-y-2">
            <h4 className="text-xl font-semibold  text-blue-800">Laboratory</h4>
            {deptSubject
              ?.filter((sub) => sub.isTheory === false)
              .map((subject) => (
                <StaffMapping
                  key={subject.subCode}
                  subjectName={`${subject.subName} (${subject.subCode})`}
                  staffOptions={staffOptions}
                  value={staffMapping[subject.subCode.trim()]}
                  setValue={(e: OptionProps) => {
                    setStaffMapping((prev) => ({
                      ...prev,
                      [subject.subCode.trim()]: e,
                    }));
                  }}
                />
              ))}
          </section>
          <Button
            className="mx-auto"
            onClick={handlePublish}
            disabled={isPublishDisabled}
          >
            Publish Feedback
          </Button>
        </div>
      )}
    </main>
  );
};

export default PublishFeedback;
