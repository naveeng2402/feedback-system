import { Button } from "@/components/ui";
import QuestionsCard from "@/components/ui/QuestionsCard";
import { useStudentFeedbackQuery } from "@/graphql/queries/studentFeedbackQuery";
import { useGetStudFeedbackDataQuery } from "@/graphql/queries/getStudentFeedbackData";
import { Dialog } from "@headlessui/react";
import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { NavLink, useParams } from "react-router-dom";
import { EmployerFeedbackOptions } from "../common/EmployerFeedback";
import { AuthContext, IAuthContext } from "@/context/auth";
import { useMutation } from "urql";
import {
  insertStudentAnswers,
  insertStudentResponse,
} from "@/graphql/mutations/insertStudentResponse";

interface ThankYouModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
interface FeedbackDataItemProps {
  prompt: string | undefined;
  value: string | undefined;
}

const ThankYouModal: FC<ThankYouModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => {}} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="absolute inset-8 mx-auto my-auto h-fit max-w-xl space-y-8 rounded-3xl bg-white p-4 text-gray-50 ">
        <h2 className="flex flex-col space-y-4 text-center text-3xl text-blue-800">
          <span>Thank You</span> <span>For Your Feedback!!!</span>
        </h2>

        <Button
          className="mx-auto w-fit px-8"
          as={NavLink}
          to="/stud/dashboard/"
        >
          Okay
        </Button>
      </Dialog.Panel>
    </Dialog>
  );
};

export const FeedbackDataItem: FC<FeedbackDataItemProps> = ({
  prompt,
  value,
}) => (
  <div className="flex w-full gap-2">
    <p className="font-semibold text-[#556085]">{prompt}:</p>
    <p className="flex-grow text-[#556085]">{value}</p>
  </div>
);

const Feedback: FC = () => {
  const { feedbackId, feedbackType } = useParams();
  const { data: questions, loading } = useStudentFeedbackQuery(); // gets the question from supabase
  const { data: feedbackData } = useGetStudFeedbackDataQuery(
    parseInt(feedbackId!)
  ); // gets the question from supabase

  const {
    auth: { profile: studProfile },
  } = useContext(AuthContext) as IAuthContext;

  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const [reviews, setReviews] = useState({});

  // construct the state that contains question id and its answer
  useMemo(() => {
    let val = {};
    questions?.forEach((ques) => {
      val = { ...val, [ques.id]: 0 };
    });

    setReviews(val);
  }, [questions]);

  // determine if all the questions are answered and enable the submit button
  const isSubmittable = useMemo(
    () => Object.values(reviews).includes(0),
    [reviews]
  );

  const [studRes, insertStudentResponseFn] = useMutation(insertStudentResponse);
  const [studAns, insertStudentAnswersFn] = useMutation(insertStudentAnswers);
  const handleSubmit = () => {
    insertStudentResponseFn({
      student_id: studProfile?.id,
      feedback_id: feedbackId,
    }).then((respRes) => {
      if (respRes.error) console.error(respRes.error);
      const studResponseId: number =
        respRes.data?.insertIntoresponseCollection?.records[0].id;
      const studAnsVars = Object.entries(reviews).map((val) => ({
        response_id: studResponseId,
        question_id: parseInt(val[0]),
        answer: val[1] as number,
      }));
      insertStudentAnswersFn({ objects: studAnsVars }).then((ansRes) => {
        if (ansRes.error) console.error(ansRes.error);

        setIsThankYouModalOpen(true);
      });
    });
  };

  return (
    <div className="my-8 mx-8 space-y-8">
      <header>
        <h1 className="text-center text-3xl font-semibold capitalize text-blue-800">
          Student {feedbackType?.toLowerCase()} Feedback
        </h1>
      </header>

      <section className="space-y-2 rounded border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4">
        <h2 className="text-lg font-bold text-[#556085]">
          {studProfile?.name}
        </h2>
        <p className="text-[#556085]">{feedbackData?.subject}</p>
        <FeedbackDataItem prompt="Faculty" value={feedbackData?.faculty} />
        <div className="grid grid-cols-2 gap-x-2">
          <FeedbackDataItem prompt="Batch" value={feedbackData?.batch} />
          <FeedbackDataItem prompt="Semester" value={feedbackData?.sem} />
          <FeedbackDataItem prompt="Section" value={feedbackData?.section} />
          <FeedbackDataItem
            prompt="Department"
            value={feedbackData?.department}
          />
        </div>
      </section>

      <main className="space-y-8 ">
        <section className="space-y-4">
          {questions?.map((questions, idx) => {
            const pos = idx + 1;
            return (
              <QuestionsCard
                key={questions.id}
                options={EmployerFeedbackOptions}
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

export default Feedback;
