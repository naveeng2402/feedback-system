import { FC, Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";
import { ReactComponent as Tick } from "@icons/Tick.svg";
import { OptionProps } from "./BaseDropdown";

interface BaseComboboxProps {
  people: OptionProps[];
  selected: OptionProps;
  setSelected:
    | React.Dispatch<React.SetStateAction<OptionProps>>
    | ((e: OptionProps) => void);
}

const BaseCombobox: FC<BaseComboboxProps> = ({
  people,
  selected,
  setSelected,
}) => {
  //   const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.text
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full rounded-lg border-2 border-blue-100 py-2 pl-3 pr-10 text-sm leading-5 text-blue-800 focus:ring-0"
            displayValue={(person: OptionProps) => person.text}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Chevron className="h-5 w-5 fill-blue-500" aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredPeople.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-600 text-white" : "text-blue-800"
                  }`
                }
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.text}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-blue-600"
                        }`}
                      >
                        <Tick className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};

export default BaseCombobox;
