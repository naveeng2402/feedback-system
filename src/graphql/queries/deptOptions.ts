import { graphql } from "@/gql";
import { useMemo, useState } from "react";
import { useQuery } from "urql";

const deptOptionsQuery = graphql(`
  query MyQuery {
    departmentsCollection {
      edges {
        node {
          id
          short_name
        }
      }
    }
  }
`);

const useDeptsQuery = () => {
  const [res, reExecuteQuery] = useQuery({ query: deptOptionsQuery });
  const { data, fetching, error } = res;

  const dataNorm = useMemo(() => {
    return data?.departmentsCollection
      ? data.departmentsCollection.edges.map((val) => ({
          id: val.node.id as string,
          text: val.node.short_name,
        }))
      : [{ id: "", text: "Select Dept" }];
  }, [data]);

  return {
    loading: fetching,
    error,
    data: dataNorm,
    reExecuteQuery,
  };
};

export { deptOptionsQuery, useDeptsQuery };
