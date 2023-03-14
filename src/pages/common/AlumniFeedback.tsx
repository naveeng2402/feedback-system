import { Button, Input } from "@ui/index";
import QuestionsCard from "@ui/QuestionsCard";
import FairIcon from "@icons/Poor.png";
import GoodIcon from "@icons/VeryGood.png";
import ExcellentIcon from "@icons/Excellent.png";
import { useEmployerFeedbackQuery } from "@/graphql/queries/employerFeedbackQuery";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import {
  insertEmployerResponse,
  insertEmployerAnswers,
} from "@/graphql/mutations/insertEmployerResponse";
import { useMutation } from "urql";
import { Dialog } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useAlumniFeedbackQuery } from "@/graphql/queries/alumniFeedbackQuery";
import { EmployerFeedbackOptions } from "./EmployerFeedback";

interface ThankYouModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ThankYouModal: FC<ThankYouModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => {}} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="absolute inset-8 mx-auto my-auto h-fit max-w-xl space-y-8 rounded-3xl bg-white p-4 text-gray-50 ">
        <h2 className="flex flex-col space-y-4 text-center text-3xl text-blue-800">
          <span>Thank You</span> <span>For Your Feedback!!!</span>
        </h2>

        <Button className="mx-auto w-fit px-8" as={NavLink} to="/">
          Okay
        </Button>
      </Dialog.Panel>
    </Dialog>
  );
};

interface OptionProps {
  score: number;
  review: string;
  image: string;
}

interface ReactiveQuestionCardProps {
  question: string;
  options: OptionProps[];
  value: number;
  setValue:
    | React.Dispatch<React.SetStateAction<number>>
    | ((value: number) => void)
    | (() => void);
}
const ReactiveQuestionCard: FC<ReactiveQuestionCardProps> = (props) => {
  const { options, ...rest } = props;
  const [optionsReactive, setOptionsReactive] = useState(options);

  return <QuestionsCard options={optionsReactive} {...rest} />;
};

const AlumniFeedback = () => {
  const { data, loading } = useAlumniFeedbackQuery(); // gets the question from supabase

  const getOptionIcon = (value: number) => {
    switch (value) {
      case 1:
        return FairIcon;
      case 2:
        return GoodIcon;
      case 3:
        return ExcellentIcon;

      default:
        return FairIcon;
    }
  };

  const [alumniName, setAlumniName] = useState("");
  const [batch, setBatch] = useState("");
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const [reviews, setReviews] = useState({});

  // construct the state that contains question id and its answer
  useMemo(() => {
    let val = {};
    data.peo?.forEach((ques) => {
      val = { ...val, [ques.id]: 0 };
    });
    data.po?.forEach((ques) => {
      val = { ...val, [ques.id]: 0 };
    });

    setReviews(val);
  }, [data]);

  // determine if all the questions are answered and enable the submit button
  const isSubmittable = useMemo(
    () => Object.values(reviews).includes(0),
    [reviews]
  );

  // graphql mutations for insertion
  const [empRes, insertEmployerResponseFn] = useMutation(
    insertEmployerResponse
  );
  const [empAns, insertEmployerAnswersFn] = useMutation(insertEmployerAnswers);

  const handleSubmit = () => {};

  return (
    <div className="my-8 ">
      <header>
        <h1 className="text-center text-3xl font-semibold text-blue-800">
          Alumni Feedback
        </h1>
      </header>
      <main className="m-8 space-y-8 ">
        <section className="space-y-4">
          <Input
            id="alumni-name"
            name="Alumni Name"
            placeholder="Alumni Name"
            type="text"
            value={alumniName}
            setValue={setAlumniName}
          />
          <Input
            id="batch"
            name="Batch"
            placeholder="Batch"
            type="text"
            value={batch}
            setValue={setBatch}
          />
        </section>

        <section className="space-y-4 rounded-lg border-2 border-gray-500/30 p-4">
          {data.peo?.map((questions, idx) => {
            // const pos = idx + 1;
            return (
              <ReactiveQuestionCard
                key={questions.id}
                // @ts-ignore
                options={questions.options?.map((val) => ({
                  score: val.value,
                  review: val.option,
                  image: getOptionIcon(val.value as number),
                }))}
                question={
                  `${questions.questionNo}. ${questions.question}` as string
                }
                // @ts-ignore
                value={reviews[questions.id]}
                setValue={(value: number) => {
                  setReviews({ ...reviews, [questions.id]: value });
                }}
              />
            );
          })}
        </section>

        <section className="space-y-4 rounded-lg border-2 border-gray-500/30 p-4">
          {data.po?.map((questions) => {
            // const pos = idx + 1;
            return (
              <QuestionsCard
                key={questions.id}
                options={EmployerFeedbackOptions}
                question={
                  `${questions.questionNo}. ${questions.question}` as string
                }
                // @ts-ignore
                value={reviews[questions.id]}
                setValue={(value: number) => {
                  setReviews({ ...reviews, [questions.id]: value });
                }}
              />
            );
          })}
        </section>
      </main>

      <Button
        className="mx-auto"
        onClick={handleSubmit}
        disabled={isSubmittable}
      >
        Submit Feedback
      </Button>

      <ThankYouModal
        isOpen={isThankYouModalOpen}
        setIsOpen={setIsThankYouModalOpen}
      />
    </div>
  );
};

export default AlumniFeedback;
export { EmployerFeedbackOptions };
