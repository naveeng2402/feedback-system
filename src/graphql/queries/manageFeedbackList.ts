import { graphql } from "@/gql";
import strftime from "@/strftime";
import { useMemo } from "react";
import { useQuery } from "urql";

const manageFeedbackList = graphql(
  `
    query manageFeedbackList {
      feedbackCollection(filter: { is_published: { eq: true } }) {
        edges {
          node {
            departments {
              short_name
            }
            batch
            created_at
            id
            sem
          }
        }
      }
    }
  `
);

export const useManageFeedbackList = () => {
  const [res, reExecuteQuery] = useQuery({ query: manageFeedbackList });
  const { fetching, data, error } = res;

  const dataNorm = useMemo(() => {
    return data?.feedbackCollection?.edges.map((item) => ({
      id: item.node.id,
      batch: item.node.batch,
      sem: item.node.sem.toString(),
      created_at: strftime("%d-%m-%Y", new Date(item.node.created_at)),
      department: item.node.departments?.short_name,
    }));
  }, [data]);

  return { data: dataNorm, fetching, error };
};
