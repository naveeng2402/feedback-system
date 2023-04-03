import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

const getStudFeedbackData = graphql(`
  query getFeedbackData($id: BigInt!) {
    staff_mappingCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          staff_profile {
            name
          }
          subject {
            name
            code
            short_name
          }
          feedback {
            batch
            departments {
              short_name
            }
            section
            sem
          }
        }
      }
    }
  }
`);

export const useGetStudFeedbackDataQuery = (id: number) => {
  const [res, reExecuteQuery] = useQuery({
    query: getStudFeedbackData,
    variables: { id },
  });
  const { fetching, data, error } = res;

  const dataNorm = useMemo(() => {
    return data?.staff_mappingCollection?.edges.map((item) => {
      const section = item.node.feedback?.section!;
      return {
        subject: `${item.node.subject?.name} (${item.node.subject?.code})`,
        faculty: item.node.staff_profile?.name!,
        sem: item.node.feedback?.sem.toString()!,
        section: section === "" ? "--" : section,
        batch: item.node.feedback?.batch.toString()!,
        department: item.node.feedback?.departments?.short_name.toUpperCase()!,
      };
    });
  }, [data]);

  return { data: dataNorm?.at(0), loading: fetching, error };
};
