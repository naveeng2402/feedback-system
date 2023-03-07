import { Button, Input } from "@ui/index";
import QuestionsCard from "@ui/QuestionsCard";
import FairIcon from "@icons/Poor.png";
import GoodIcon from "@icons/VeryGood.png";
import ExcellentIcon from "@icons/Excellent.png";
import { useEmployerFeedbackQuery } from "@/graphql/queries/employerFeedbackQuery";
import { useMemo, useState } from "react";

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

  const [reviews, setReviews] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
  });

  const isSubmittable = useMemo(
    () => Object.values(reviews).includes(0),
    [reviews]
  );

  const handleSubmit = () => {};

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
                  setReviews({ ...reviews, [pos]: value });
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
