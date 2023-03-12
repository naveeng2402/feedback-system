import { BaseDropdown, Button } from "@/components/ui";
import { FC, useEffect, useState } from "react";
import { ReactComponent as Filter } from "@icons/Filter.svg";
import { useParams } from "react-router-dom";
import FilterModal from "@/components/ui/FilterModal";
import { useEmployerResponseQuery } from "@/graphql/queries/employerResponseList";

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

  const options = ["2023", "2022", "2021", "2020"].map((year) => ({
    id: year,
    text: year,
  }));

  const [fromYear, setFromYear] = useState(options[0]);
  const [toYear, setToYear] = useState(options[0]);

  const responses = useEmployerResponseQuery(
    parseInt(fromYear.text),
    parseInt(toYear.text)
  );

  const [title, setTitle] = useState(options[0].text);
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

    //TODO call the api with new params

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
            options={options}
          />
          <BaseDropdown
            label="To"
            value={toYear}
            setValue={setToYear}
            options={options}
          />
        </div>
      </FilterModal>
    </>
  );
};

export default ResponseList;
