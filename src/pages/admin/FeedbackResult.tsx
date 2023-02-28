import { BaseDropdown, Button } from "@/components/ui";
import { Dialog } from "@headlessui/react";
import FeedbackCard from "@ui/FeedbackCard";
import { ReactComponent as Filter } from "@icons/Filter.svg";
import { FC, useState } from "react";
import FeedbackAccordion from "@/components/ui/FeedbackAccordion";
import { ReactComponent as Good } from "@icons/Good.svg";
import { ReactComponent as Plus } from "@icons/Plus.svg";
import { NavLink } from "react-router-dom";

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
      <Dialog.Panel className="relative ml-auto flex h-screen w-3/4 flex-col gap-4 rounded-tl-3xl rounded-bl-3xl bg-white p-2 pt-8 text-gray-50 sm:w-fit">
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

const FeedbackResult: FC<FeedbackResultProps> = ({ report }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <Button
          onClick={() => setFilterOpen(true)}
          intent="inactive"
          className="mx-4 ml-auto block p-2"
        >
          <span>Filter</span>
          <Filter className="translate-y-0.5 stroke-blue-800" />
        </Button>
      </div>

      <section>Feedback Detail</section>

      <main className="w-full">
        <FeedbackAccordion
          Options={[{ score: "12", icon: <Good /> }]}
          overallRating={3}
          question="lorem ipsum dolor sit amet"
        />
      </main>

      <Button
        as={NavLink}
        to="/admin/create_feedback"
        size="circle"
        className="absolute bottom-0 right-0 mx-8 my-16 stroke-white p-4"
      >
        <Plus />
      </Button>

      <FilterModal isOpen={filterOpen} setIsOpen={setFilterOpen} />
    </>
  );
};

export default FeedbackResult;
