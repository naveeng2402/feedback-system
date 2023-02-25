import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import upArrow from "@icons/upArrow.png";
interface FAProps {
  RC: React.ReactNode;
  Options: OptionsProps[];
  question: string;
}

interface OptionsProps {
  score: string;
  image: string;
}

const FeedbackAccordion: FC<FAProps> = ({ RC, Options, question }) => {
  return (
    <Disclosure as="div" className="border-2 border-blue-600  ">
      <Disclosure.Button
        as="div"
        className="flex items-center justify-evenly gap-2"
      >
        <p className="">{question}</p>

        <div className="">{RC}</div>
        <img src={upArrow} className="h-5 w-5  ui-open:rotate-180" />
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500" as="div">
        {/* Yes! You can purchase a license that you can share with your entire
        team. */}
        <div className=" mx-4 grid grid-cols-5 items-center py-2">
          {Options.map((option) => {
            return (
              <div>
                <div>
                  <img src={option.image} alt="" />
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
