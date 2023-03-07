import { Button, Input } from "@ui/index";
import QuestionsCard from "@ui/QuestionsCard";
import FairIcon from "@icons/Poor.png";
import GoodIcon from "@icons/VeryGood.png";
import ExcellentIcon from "@icons/Excellent.png";
import { useEmployerFeedbackQuery } from "@/graphql/queries/employerFeedbackQuery";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { insertEmployerResponse } from "@/graphql/mutations/insertEmployerResponse";
import { useMutation } from "urql";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const EmployerFeedback = () => {
  const { data, loading } = useEmployerFeedbackQuery();

  const [empName, setEmpName] = useState("");
  const [company, setCompany] = useState("");

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

  useMemo(() => {
    let val = {};
    data?.forEach((ques) => {
      val = { ...val, [ques.id]: 0 };
    });

    setReviews(val);
  }, [data]);

  const isSubmittable = useMemo(
    () => Object.values(reviews).includes(0),
    [reviews]
  );

  const [empRes, insertEmployerResponseFn] = useMutation(
    insertEmployerResponse
  );

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
    </div>
  );
};

export default EmployerFeedback;
