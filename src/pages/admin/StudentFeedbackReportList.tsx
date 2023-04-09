import { BaseDropdown, Button } from "@/components/ui";
import { Dialog } from "@headlessui/react";
import FeedbackCard from "@ui/FeedbackCard";
import { ReactComponent as XMark } from "@icons/XMark.svg";
import { FC, useState } from "react";

interface FeedbackResultProps {
  report: "stud_course" | "stud_lab";
}

interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal: FC<FilterModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="relative ml-auto flex h-screen w-3/4 flex-col gap-4 rounded-tl-3xl rounded-bl-3xl bg-white p-2 pt-8 text-gray-50 ">
        <h2 className="text-4xl text-blue-800">Filters</h2>

        <div className="">
          <p>Add Filters</p>
        </div>

        <div className="mt-auto mb-4 flex w-full gap-4 px-2">
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full"
            intent="inactive"
          >
            Close
          </Button>
          <Button className="w-full">Apply</Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

const StudentFeedbackReportList: FC<FeedbackResultProps> = ({ report }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <Button
          onClick={() => setFilterOpen(true)}
          intent="inactive"
          className="mx-4 ml-auto block p-2"
        >
          Filter
        </Button>
      </div>

      <FilterModal isOpen={filterOpen} setIsOpen={setFilterOpen} />
    </>
  );
};

export default StudentFeedbackReportList;
