import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

const studentFeedbackQuery = graphql(`
  query StudentFeedbackQuery {
    questionCollection(
      filter: { feedback_type: { eq: "E" } }
      orderBy: { question_no: AscNullsLast }
    ) {
      edges {
        node {
          id
          question_no
          question
          no_of_options
        }
      }
    }
  }
`);

export const useStudentFeedbackQuery = () => {
  const [res, reExecuteQuery] = useQuery({ query: studentFeedbackQuery });
  const { fetching, error, data } = res;

  const dataNorm = useMemo(() => {
    return data?.questionCollection?.edges.map((val) => ({
      id: val.node.id,
      questionNo: val.node.question_no,
      question: val.node.question,
      noOfOptions: val.node.no_of_options,
    }));
  }, [data]);

  return {
    loading: fetching,
    error,
    data: dataNorm,
    reExecuteQuery,
  };
};
