import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

const getStudFeedbackList = graphql(`
  query GetStudFeedbackList(
    $batch: Int!
    $dept: BigInt!
    $section: String = ""
  ) {
    feedbackCollection(
      filter: {
        batch: { eq: $batch }
        department_id: { eq: $dept }
        section: { eq: $section }
      }
    ) {
      edges {
        node {
          staff_mappingCollection {
            edges {
              node {
                subject {
                  code
                  short_name
                  name
                  id
                  is_theory
                }
                id
                responseCollection {
                  edges {
                    node {
                      id
                    }
                  }
                }
                staff_profile {
                  name
                  departments {
                    short_name
                    id
                  }
                }
              }
            }
          }
          id
          sem
        }
      }
    }
  }
`);

export const useGetStudFeedbackList = (
  batch: number,
  dept: number,
  section: string
) => {
  const [res, reExecuteQuery] = useQuery({
    query: getStudFeedbackList,
    variables: { batch, dept, section },
  });
  const { fetching, data, error } = res;

  const dataNorm = useMemo(() => {
    return data?.feedbackCollection?.edges.map((feedbackItem) => {
      const staffMapping = feedbackItem.node.staff_mappingCollection?.edges.map(
        (staffMappingItem) => ({
          id: staffMappingItem.node.id,
          subject: {
            id: staffMappingItem.node.subject?.id,
            name: staffMappingItem.node.subject?.name,
            shortName: staffMappingItem.node.subject?.short_name,
            code: staffMappingItem.node.subject?.code,
            type: staffMappingItem.node.subject?.is_theory ? "course" : "lab",
          },
          responses: staffMappingItem.node.responseCollection?.edges.map(
            (respItem) => ({ id: respItem.node.id })
          ),
          staff: `${staffMappingItem.node.staff_profile?.name} (${staffMappingItem.node.staff_profile?.departments?.short_name})`,
        })
      );
      return {
        id: feedbackItem.node.id,
        sem: feedbackItem.node.sem,
        staffMapping,
      };
    });
  }, [data]);

  return { data: dataNorm, loading: fetching, error };
};
