import { graphql } from "@/gql";
import strftime from "@/strftime";
import { useMemo } from "react";
import { useQuery } from "urql";

const alumniResponseResultQuery = graphql(`
  query AlumniResponseResultQuery($id: BigInt) {
    employer_responseCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          employer_name
          company
          employer_answersCollection {
            edges {
              node {
                question {
                  question_no
                  question
                }
                answer
              }
            }
          }
          created_at
        }
      }
    }
  }
`);

export const useAlumniResponseResultQuery = (id: number) => {
  const [res, reExecuteQuery] = useQuery({
    query: alumniResponseResultQuery,
    variables: { id },
  });
  const { fetching, error, data } = res;

  const dataNorm = useMemo(() => {
    if (fetching)
      return { cardTitle: "", cardSubtitle: "", date: "", answers: [] };
    const res = data?.employer_responseCollection?.edges[0].node;
    const cardDetails = {
      cardTitle: res?.employer_name,
      cardSubtitle: res?.company,
      date: strftime("%d-%m-%Y", new Date(res?.created_at)),
    };
    const answers = res?.employer_answersCollection?.edges.map((val) => ({
      questionNo: val.node.question?.question_no,
      question: val.node.question?.question,
      answer: val.node.answer,
    }));

    return { ...cardDetails, answers };
  }, [data]);

  return {
    loading: fetching,
    error,
    data: dataNorm,
    reExecuteQuery,
  };
};
