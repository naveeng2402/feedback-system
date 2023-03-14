import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

const alumniFeedbackQuery = graphql(`
  query AlumniFeedbackQuery {
    questionCollection(
      filter: { feedback_type: { eq: "A" } }
      orderBy: { question_no: AscNullsFirst }
    ) {
      edges {
        node {
          question_no
          question
          question_optionsCollection {
            edges {
              node {
                option
                value
                id
              }
            }
          }
          no_of_options
          id
        }
      }
    }
  }
`);

export const useAlumniFeedbackQuery = () => {
  const [res, reExecuteQuery] = useQuery({ query: alumniFeedbackQuery });
  const { fetching, error, data } = res;

  const dataNorm = useMemo(() => {
    const dataTot = data?.questionCollection?.edges.map((val) => ({
      id: val.node.id,
      questionNo: val.node.question_no,
      question: val.node.question,
      noOfOptions: val.node.no_of_options,
      options: val.node.question_optionsCollection?.edges.map((opts) => ({
        id: opts.node.id,
        option: opts.node.option,
        value: opts.node.value,
      })),
    }));

    return {
      peo: dataTot?.filter((val) => val.noOfOptions === null),
      po: dataTot?.filter((val) => val.noOfOptions !== null),
    };
  }, [data]);

  return {
    loading: fetching,
    error,
    data: dataNorm,
    reExecuteQuery,
  };
};
