import { BaseDropdown, Button } from "@/components/ui";
import FilterModal from "@/components/ui/FilterModal";
import { useDeptsQuery } from "@/graphql/queries/deptOptions";
import { useGetStudentFeedbackBatch } from "@/graphql/queries/getStudentFeedbackBatch";
import { Dialog } from "@headlessui/react";
import { FC, useEffect, useState } from "react";

const StudentFeedbackReportList: FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const batchOptions = useGetStudentFeedbackBatch({});
  const { data: _deptsOptions } = useDeptsQuery();
  const [deptOptions, setDeptOptions] = useState(_deptsOptions);
  useEffect(() => {
    if (_deptsOptions.length > 1) {
      setDeptOptions([{ id: "", text: "---" }, ..._deptsOptions]);
    }
  }, [_deptsOptions]);

  const [batch, setBatch] = useState(batchOptions[0]);
  const [dept, setDept] = useState(deptOptions[0]);

  const onModalApply = () => {};

  return (
    <>
      <div className="my-2 w-full">
        <Button
          onClick={() => setFilterOpen(true)}
          intent="inactive"
          className="mx-4 ml-auto block p-2"
        >
          Filter
        </Button>
      </div>

      <FilterModal
        isOpen={filterOpen}
        setIsOpen={setFilterOpen}
        onApply={onModalApply}
      >
        <div className="space-y-2">
          <BaseDropdown
            label="Batch"
            value={batch}
            setValue={setBatch}
            options={batchOptions}
          />
          <BaseDropdown
            label="Department"
            value={dept}
            setValue={setDept}
            options={deptOptions}
          />
        </div>
      </FilterModal>
    </>
  );
};

export default StudentFeedbackReportList;
