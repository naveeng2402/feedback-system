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

const EmployerFeedback = () => {
  const { data, loading } = useEmployerFeedbackQuery(); // gets the question from supabase

  const [empName, setEmpName] = useState("");
  const [company, setCompany] = useState("");
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const options = [
    {
      score: 1,
      image: FairIcon,
      review: "Fair",
    },
    {
      score: 2,
      image: GoodIcon,
      review: "Good",
    },
    {
      score: 3,
      image: ExcellentIcon,
      review: "Excellent",
    },
  ];

  const [reviews, setReviews] = useState({});

  // construct the state that contains question id and its answer
  useMemo(() => {
    let val = {};
    data?.forEach((ques) => {
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

  const handleSubmit = () => {
    if (empName === "") {
      alert("Please Enter Employer Name");
      return;
    }

    if (company === "") {
      alert("Please Enter Company Name");
      return;
    }

    insertEmployerResponseFn({ company, employer_name: empName }).then(
      (respRes) => {
        if (respRes.error) console.error(respRes.error);

        const empResponseId: number =
          respRes.data?.insertIntoemployer_responseCollection?.records[0].id;

        const empAnsVars = Object.entries(reviews).map((val) => ({
          employer_res_id: empResponseId,
          question_id: parseInt(val[0]),
          answer: val[1] as number,
        }));

        insertEmployerAnswersFn({ objects: empAnsVars }).then((ansRes) => {
          if (ansRes.error) console.error(ansRes.error);

          setIsThankYouModalOpen(true);
        });
      }
    );
  };

  return (
    <div className="my-8 ">
      <header>
        <h1 className="text-center text-3xl font-semibold text-blue-800">
          Employer Feedback
        </h1>
      </header>
      <main className="my-8 mx-12 space-y-8 ">
        <section className="space-y-4">
          <Input
            id="emp-name"
            name="Employer Name"
            placeholder="Employer Name"
            type="text"
            value={empName}
            setValue={setEmpName}
          />
          <Input
            id="company"
            name="Company"
            placeholder="Company"
            type="text"
            value={company}
            setValue={setCompany}
          />
        </section>

        <section className="space-y-4">
          {data?.map((questions, idx) => {
            const pos = idx + 1;
            return (
              <QuestionsCard
                key={questions.id}
                options={options}
                question={`${idx + 1}. ${questions.question}` as string}
                // @ts-ignore
                value={reviews[pos]}
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

export default EmployerFeedback;
