import { graphql } from "@/gql";
import strftime from "@/strftime";
import { useMemo } from "react";
import { useQuery } from "urql";

const alumniResponseResultQuery = graphql(`
  query AlumniResponseResultQuery($id: BigInt) {
    alumni_responseCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          alumni_name
          batch
          created_at
          departments {
            short_name
          }
          alumni_answersCollection {
            edges {
              node {
                answer
                question {
                  question
                  question_no
                  question_optionsCollection {
                    edges {
                      node {
                        option
                        value
                      }
                    }
                  }
                }
              }
            }
          }
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

    const res = data?.alumni_responseCollection?.edges[0].node;
    const cardDetails = {
      cardTitle: res?.alumni_name,
      cardSubtitle: `${res?.departments?.short_name} ${res?.batch}`,
      date: strftime("%d-%m-%Y", new Date(res?.created_at)),
    };
    const answers = res?.alumni_answersCollection?.edges.map((val) => {
      const review = val.node.question?.question_optionsCollection?.edges.find(
        (val) => val.node.value === val.node.option
      )?.node.option;
      return {
        questionNo: val.node.question?.question_no,
        question: val.node.question?.question,
        answer: val.node.answer,
        review,
      };
    });

    return { ...cardDetails, answers };
  }, [data]);

  return {
    loading: fetching,
    error,
    data: dataNorm,
    reExecuteQuery,
  };
};
