import { FC, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";

export interface OptionProps {
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
  const getButtonClasses = (isOpen: boolean) =>
    isOpen ? "border-blue-500 fill-blue-600" : "border-blue-100 fill-blue-200";
  const getIconClasses = (isOpen: boolean) =>
    isOpen ? "rotate-180" : "rotate-0";

  return (
    <Listbox as="div" className="relative" value={value} onChange={setValue}>
      {({ open }) => (
        <>
          <Listbox.Label className="text-xl text-blue-800">
            {label}
          </Listbox.Label>
          <Listbox.Button
            className={`flex w-full items-center justify-between gap-4 rounded-xl border-2 py-5 px-5 text-blue-900 ${getButtonClasses(
              open
            )}`}
          >
            {value.text}
            <Chevron
              className={`h-6 w-6 translate-y-0.5 transition duration-200 ${getIconClasses(
                open
              )}`}
            />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 my-1 flex max-h-32 w-full flex-col gap-2 overflow-y-auto overflow-x-hidden  rounded-xl border-2 border-blue-500 bg-white px-2 py-4 text-blue-900 scrollbar-thin scrollbar-thumb-blue-200/75">
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
        </>
      )}
    </Listbox>
  );
};

export default BaseDropdown;
