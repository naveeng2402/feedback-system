import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";

interface FeedbackAccordionProps {
  ratingChip: React.ReactNode;
  Options: OptionsProps[];
  question: string;
}

interface OptionsProps {
  score: string;
  icon: React.ReactNode;
}

const FeedbackAccordion: FC<FeedbackAccordionProps> = ({
  ratingChip,
  Options,
  question,
}) => {
  return (
    <Disclosure as="div" className="rounded-lg border-2 border-blue-600  px-1 ">
      <Disclosure.Button
        as="div"
        className="flex items-center justify-evenly gap-2"
      >
        <p className="">{question}</p>

        <div className="">{ratingChip}</div>
        <Chevron className="h-6  w-6 translate-y-0.5 transition duration-200 ui-open:rotate-180" />
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500" as="div">
        <div className=" mx-4 flex items-center gap-4 py-2">
          {Options.map((option) => {
            return (
              <div>
                <div>
                  {option.icon}
                  <h1 className="mx-2">{option.score}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default FeedbackAccordion;
