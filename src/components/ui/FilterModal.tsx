import { Dialog } from "@headlessui/react";
import { FC, ReactNode } from "react";
import Button from "./Button";

interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  onApply: () => void;
}

const FilterModal: FC<FilterModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  onApply,
}) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="absolute inset-8 mx-auto my-auto h-fit max-w-xl space-y-8 rounded-3xl bg-white p-4 text-blue-800 ">
        <h2 className="text-center text-3xl font-semibold">Add Filters</h2>
        {children}
        <div className="flex w-full gap-4 px-2">
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full"
            intent="inactive"
          >
            Close
          </Button>
          <Button className="w-full" onClick={onApply}>
            Apply
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default FilterModal;
