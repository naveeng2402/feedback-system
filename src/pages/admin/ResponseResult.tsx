import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployerFeedbackOptions } from "@/pages/common/EmployerFeedback";
import { useEmployerResponseResultQuery } from "@/graphql/queries/employerReponseResultQuery";
import Error404 from "@/components/global/Error404";
import { Nullable } from "@/types";
import RatingChip from "@/components/ui/RatingChip";

interface ResponseResultHeaderProps {
  cardTitle: string;
  cardSubtitle: string;
  date: string;
}
const ResponseResultHeader: FC<ResponseResultHeaderProps> = ({
  cardSubtitle,
  cardTitle,
  date,
}) => (
  <section className="mx-4 space-y-1 rounded-md border-2 border-[#B1C1FD] bg-[#E0EDFF]/50 p-4  text-[#556085] shadow">
    <h3 className="grow text-lg font-semibold">{cardTitle}</h3>
    <div className="text- flex">
      <p className="grow">{cardSubtitle}</p>
      <p className="min-w-fit">{date}</p>
    </div>
  </section>
);

interface ResponseResultAnswerProps {
  questionNo: Nullable<number>;
  question: Nullable<string>;
  answer: Nullable<number>;
}
const ResponseResultAnswer: FC<ResponseResultAnswerProps> = ({
  questionNo,
  question,
  answer,
}) => {
  const ans = EmployerFeedbackOptions.find((val) => val.score === answer);
  return (
    <div className="space-y-2 rounded-md border-2 border-[#D0D4E3] px-4 py-2 text-[#7D7D7D]">
      <div className="flex gap-2 text-lg text-gray-600">
        <p>{questionNo}.</p>
        <p>{question}</p>
      </div>
      <div className="ml-4 flex items-center gap-2 text-lg text-gray-800">
        <p>
          {ans?.review} [{ans?.score}]
        </p>
        <img src={ans?.image} className="h-8 w-8" alt={`${ans?.review} icon`} />
      </div>
    </div>
  );
};

const ResponseResult: FC = () => {
  const { responseType, id } = useParams();
  if (responseType === undefined || id === undefined) {
    return <Error404 />;
  }

  const navigate = useNavigate();
  const { queryHook } = (() => {
    switch (responseType) {
      case "employer":
        return {
          queryHook: useEmployerResponseResultQuery,
        };
      case "alumni":
        return {
          queryHook: useEmployerResponseResultQuery,
        };
      default:
        navigate("errors/404");
        return {
          queryHook: useEmployerResponseResultQuery,
        };
    }
  })();

  const { data, loading } = useEmployerResponseResultQuery(parseInt(id));
  const totalRatingScored = data.answers?.reduce((a, b) => {
    return a + (b.answer as number);
  }, 0) as number;

  const [isErr, setIsErr] = useState(false);
  useEffect(() => {
    if (
      loading === false &&
      JSON.stringify({
        cardTitle: "",
        cardSubtitle: "",
        date: "",
        answers: [],
      }) === JSON.stringify(data)
    )
      setIsErr(true);
  }, [loading]);

  return (
    <>
      {isErr ? (
        <Error404 />
      ) : (
        <>
          <ResponseResultHeader
            cardTitle={data.cardTitle as string}
            cardSubtitle={data.cardSubtitle as string}
            date={data.date}
          />
          <RatingChip
            rating={totalRatingScored}
            total={3 * (data.answers?.length as number)}
            className="mx-4 my-8 ml-auto w-fit"
          />
          <main className="mx-4 my-8 space-y-4">
            {data.answers?.map((value, idx) => (
              <ResponseResultAnswer key={idx} {...value} />
            ))}
          </main>
        </>
      )}
    </>
  );
};

export default ResponseResult;
