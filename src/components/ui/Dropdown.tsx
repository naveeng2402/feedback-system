import { FC, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";

interface Dropdownprops {
  value: Object;
  setValue: React.Dispatch<React.SetStateAction<Object>>;
  options: Object[];
  label: string;
}
interface Object {
  id: number;
  name: string;
}

const MyListbox: FC<Dropdownprops> = ({ value, setValue, options, label }) => {
  // const [selectedValue, setSelectedValue] = useState(people[0]);

  return (
    <Listbox as="div" className="relative" value={value} onChange={setValue}>
      <Listbox.Label>{label}</Listbox.Label>
      <Listbox.Button className=" flex w-full items-center justify-between gap-4 rounded border-2 border-blue-500 px-4 py-2">
        {value.name}
        {/* <svg
          className="ui-open:rotate-180 transition-all w-7 h-8 fill-pink-700"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.293 5.28697C11.4816 5.10481 11.7342 5.00402 11.9964 5.00629C12.2586 5.00857 12.5094 5.11374 12.6948 5.29915C12.8802 5.48456 12.9854 5.73537 12.9877 5.99757C12.9899 6.25976 12.8892 6.51237 12.707 6.70097L8.707 10.701C8.51947 10.8884 8.26516 10.9938 8 10.9938C7.73483 10.9938 7.48052 10.8884 7.293 10.701L3.293 6.70097C3.11084 6.51237 3.01004 6.25976 3.01232 5.99757C3.0146 5.73537 3.11977 5.48456 3.30518 5.29915C3.49058 5.11374 3.7414 5.00857 4.00359 5.00629C4.26579 5.00402 4.51839 5.10481 4.70699 5.28697L8 8.57997L11.293 5.28697Z"
          />
        </svg> */}
        <Chevron className="h-6  w-6 translate-y-0.5 fill-black transition duration-500 ui-open:rotate-180" />
      </Listbox.Button>
      <Listbox.Options className="my-1 flex flex-col gap-2 border-2 border-red-700 py-2">
        {options.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option}
            className="ui-selected:bg-blue-500 ui-active:bg-blue-800 "
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default MyListbox;
