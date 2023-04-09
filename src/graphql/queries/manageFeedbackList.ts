import { graphql } from "@/gql";
import strftime from "@/strftime";
import { useMemo } from "react";
import { useQuery } from "urql";

const manageFeedbackList = graphql(
  `
    query manageFeedbackList(
      $is_published: Boolean
      $batch: Int
      $dept: BigInt
    ) {
      feedbackCollection(
        filter: {
          is_published: { eq: $is_published }
          batch: { eq: $batch }
          department_id: { eq: $dept }
        }
      ) {
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

interface IManageFeedbackList {
  batch?: number | null;
  dept?: number | null;
}

export const useManageFeedbackList = (
  is_published: boolean = true,
  { batch, dept }: IManageFeedbackList = {
    batch: null,
    dept: null,
  }
) => {
  let vars: any = { is_published };
  if (batch) {
    vars = { ...vars, batch };
  }
  if (dept) {
    vars = { ...vars, dept };
  }

  const [res, reExecuteQuery] = useQuery({
    query: manageFeedbackList,
    variables: vars,
  });
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

  return { data: dataNorm, fetching, error, reExecuteQuery };
};
