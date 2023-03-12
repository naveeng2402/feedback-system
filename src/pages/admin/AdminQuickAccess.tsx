import { FC, useState } from "react";
import { Button } from "@/components/ui";
import FeedbackDetails from "@/components/ui/FeedbackDetails";
import FeedbackAccordion from "@/components/ui/FeedbackAccordion";
import { Dialog } from "@headlessui/react";
import Poor from "@icons/Poor.png";
import Fair from "@icons/Fair.png";
import Good from "@icons/Good.png";
import VeryGood from "@icons/VeryGood.png";
import Excellent from "@icons/Excellent.png";

interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FeedbackResultProps {
  report: "stud_course" | "stud_lab";
}

const data = [
  {
    score: "20%",
    icon: Poor,
  },
  {
    score: "40%",
    icon: Fair,
  },
  {
    score: "60%",
    icon: Good,
  },
  {
    score: "80%",
    icon: VeryGood,
  },
  {
    score: "100%",
    icon: Excellent,
  },
];

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

const AdminQuickAccess: FC<FeedbackResultProps> = ({ report }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-[#192860]">Quick Access</h1>
        <Button
          onClick={() => setFilterOpen(true)}
          intent="inactive"
          className=""
        >
          Filter
        </Button>

        <FilterModal isOpen={filterOpen} setIsOpen={setFilterOpen} />
      </div>

      <div className="mx-4">
        <FeedbackDetails
          Department="CSE"
          ProfessorName="Asst. Prof. Kristin Watson "
          Section="--"
          Semester={6}
          SubjectName="Object Oriented Programming Laboratory 
        (CS8603)"
          batch="2020-2024"
          yearButton="Mar 2022"
        />
        <section className="py-3">
          <FeedbackAccordion
            Options={data}
            overallRating={4}
            question="Completion of syllabus on time "
            questionNumber="1."
          />
        </section>
      </div>
      <div className="grid place-items-center py-4">
        <Button className="">View Report</Button>
      </div>
    </div>
  );
};

export default AdminQuickAccess;
