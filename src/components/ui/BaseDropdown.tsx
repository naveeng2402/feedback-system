import { FC, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";

interface OptionProps {
  id: string;
  text: string;
}

interface DropdownProps {
  value: OptionProps;
  setValue: React.Dispatch<React.SetStateAction<OptionProps>>;
  options: OptionProps[];
  label: string;
}

const BaseDropdown: FC<DropdownProps> = ({
  value,
  setValue,
  options,
  label,
}) => {
  return (
    <Listbox as="div" className="relative" value={value} onChange={setValue}>
      <Listbox.Label className="text-xl text-blue-800">{label}</Listbox.Label>
      <Listbox.Button className=" flex w-full items-center justify-between gap-4 rounded-xl border-2 border-blue-100 fill-blue-200 py-5 px-5 text-blue-900 ui-open:border-blue-500 ui-open:fill-blue-600">
        {value.text}
        <Chevron className="h-6  w-6 translate-y-0.5 transition duration-200 ui-open:rotate-180" />
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 my-1 flex w-full flex-col gap-2 rounded-xl  border-2 border-blue-500 bg-white px-2 py-4 text-blue-900">
        {options.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option}
            className="rounded-xl p-2 ui-selected:border ui-selected:border-blue-400 ui-selected:bg-blue-100 ui-active:bg-blue-50"
          >
            {option.text}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default BaseDropdown;
