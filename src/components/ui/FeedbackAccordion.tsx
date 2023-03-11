import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";
import RatingChip from "./RatingChip";

interface FeedbackAccordionProps {
  overallRating: number;
  Options: OptionsProps[];
  question: string;
  questionNumber: string;
}

interface OptionsProps {
  score: string;
  icon: string;
}

const FeedbackAccordion: FC<FeedbackAccordionProps> = ({
  overallRating,
  Options,
  questionNumber,
  question,
}) => {
  return (
    <Disclosure as="div" className="rounded-lg border-2 border-[#D0D4E3]  p-4 ">
      <Disclosure.Button as="div" className="flex gap-3 py-2">
        <p>{questionNumber}</p>
        <p className="flex-grow text-[#192860]">{question}</p>
        <div className="h-fit">
          <RatingChip rating={overallRating} />
        </div>
        <Chevron className="h-6  w-6 translate-y-0.5 transition duration-200 ui-open:rotate-180" />
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500" as="div">
        <div className=" mx-4 flex items-center justify-center gap-4 py-2">
          {Options.map((option) => {
            return (
              <div>
                <div>
                  <img src={option.icon} alt="icon" />
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
