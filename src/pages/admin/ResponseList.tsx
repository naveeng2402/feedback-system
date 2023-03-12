import { BaseDropdown, Button } from "@/components/ui";
import { FC, useEffect, useState } from "react";
import { ReactComponent as Filter } from "@icons/Filter.svg";
import { useParams } from "react-router-dom";
import FilterModal from "@/components/ui/FilterModal";
import {
  useEmployerResponseQuery,
  useEmployerResponseYearOptionsQuery,
} from "@/graphql/queries/employerResponseList";

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
  const { responseType } = useParams();

  const [fromYear, setFromYear] = useState({ id: "2023", text: "2023" });
  const [toYear, setToYear] = useState({ id: "2023", text: "2023" });

  const responses = useEmployerResponseQuery(
    parseInt(fromYear.text),
    parseInt(toYear.text)
  );
  const yearOptions = useEmployerResponseYearOptionsQuery();

  const [title, setTitle] = useState("2023");
  useEffect(() => {
    fromYear.text === toYear.text && setTitle(fromYear.text);
    fromYear.text !== toYear.text &&
      setTitle(`${fromYear.text} - ${toYear.text}`);
  }, [fromYear, toYear]);

  const [filterOpen, setFilterOpen] = useState(false);
  const openModal = () => setFilterOpen(true);
  const onModalApply = () => {
    if (parseInt(fromYear.id) > parseInt(toYear.id)) {
      alert("Invalid Range");
      return;
    }
    setFilterOpen(false);
  };

  return (
    <>
      <div className="my-4 mx-4 flex items-center">
        <h2 className="grow text-2xl font-bold">{title}</h2>
        <Button onClick={openModal} className="" intent="inactive">
          Filters
          <Filter className="h-6 w-6" />
        </Button>
      </div>

      <main className="mx-4 my-4 space-y-2">
        {responses?.map((resp) => (
          <ResponseListItem
            key={resp.id}
            name={resp.employer_name}
            company={resp.company}
            date={resp.created_at}
          />
        ))}
      </main>

      <FilterModal
        isOpen={filterOpen}
        setIsOpen={setFilterOpen}
        onApply={onModalApply}
      >
        <div className="space-y-2">
          <BaseDropdown
            label="From"
            value={fromYear}
            setValue={setFromYear}
            options={yearOptions}
          />
          <BaseDropdown
            label="To"
            value={toYear}
            setValue={setToYear}
            options={yearOptions}
          />
        </div>
      </FilterModal>
    </>
  );
};

export default ResponseList;
