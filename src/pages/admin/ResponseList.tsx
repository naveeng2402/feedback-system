import { Button } from "@/components/ui";
import { supabase } from "@/supabase";
import { FC, useState } from "react";
import { ReactComponent as Filter } from "@icons/Filter.svg";
import { useParams } from "react-router-dom";
import FilterModal from "@/components/ui/FeedbackModal";

interface ResponseListItemProps {
  name: string;
  company: string;
  date: string;
}

const ResponseListItem: FC<ResponseListItemProps> = ({
  company,
  date,
  name,
}) => (
  <div className=" space-y-1 rounded-md border-2 border-[#B1C1FD] bg-[#E0EDFF]/50 p-4  text-[#556085] shadow transition-all hover:scale-[101%] hover:bg-[#E0EDFF] hover:shadow-md">
    <h3 className="text-lg font-semibold ">{name}</h3>
    <div className="text- flex">
      <p className="grow ">{company}</p>
      <p className="min-w-fit">{date}</p>
    </div>
  </div>
);

const ResponseList: FC = () => {
  const { response } = useParams();

  const [filterOpen, setFilterOpen] = useState(false);
  const openModal = () => setFilterOpen(true);

  const data = {
    company: "Google",
    date: "24-02-2023",
    name: "Rishika SV",
  };

  return (
    <>
      <Button
        onClick={openModal}
        className="my-4 ml-auto mr-4"
        intent="inactive"
      >
        Filters
        <Filter className="h-6 w-6" />
      </Button>

      <main className="mx-4 my-4">
        <ResponseListItem {...data} />
      </main>

      <FilterModal
        isOpen={filterOpen}
        setIsOpen={setFilterOpen}
        onApply={() => setFilterOpen(false)}
      >
        <p>Hello from Response List Page</p>
      </FilterModal>
    </>
  );
};

export default ResponseList;
