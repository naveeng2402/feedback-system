import { FC } from "react";
import { RadioGroup } from "@headlessui/react";

// import { CheckIcon } from '@heroicons/react/20/solid'

// const plans = ["Excellent", "Very Good", "Good", "Bad", "Average"];
interface OptionProps {
  id: number;
  review: string;
  image: string;
}
interface QCprops {
  label: string;
  Options: OptionProps[];
  value: OptionProps;
  setValue: React.Dispatch<React.SetStateAction<OptionProps>>;
}

const MyRadioGroup: FC<QCprops> = ({ label, Options, value, setValue }) => {
  return (
    <RadioGroup
      as="div"
      className="space-y-4"
      value={value}
      onChange={setValue}
    >
      <RadioGroup.Label>{label}</RadioGroup.Label>
      <div className="space-y-2">
        {Options.map((plan) => (
          <RadioGroup.Option
            key={plan.id}
            value={plan}
            as="div"
            className="mx-4 flex items-center justify-start gap-2  rounded-lg px-2 ui-active:bg-blue-300  "
          >
            <div className="h-3 w-3 rounded-full border-2 border-blue-900  ui-active:border-4 ui-active:border-blue-700"></div>
            {/* <CheckIcon className="hidden ui-checked:block" /> */}
            <img src={plan.image} alt="image" className="" />
            {plan.review}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default MyRadioGroup;
