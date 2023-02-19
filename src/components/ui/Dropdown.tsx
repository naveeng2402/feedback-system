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
  return (
    <Listbox as="div" className="relative" value={value} onChange={setValue}>
      <Listbox.Label>{label}</Listbox.Label>
      <Listbox.Button className=" flex w-full items-center justify-between gap-4 rounded border-2 border-blue-500 px-4 py-2">
        {value.name}
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
