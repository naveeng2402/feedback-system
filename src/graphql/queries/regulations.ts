import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

const regs = graphql(`
  query regs {
    regulationsCollection {
      edges {
        node {
          reg
          id
          created_at
        }
      }
    }
  }
`);

const useRegulationsQuery = () => {
  const [res, reExecuteQuery] = useQuery({ query: regs });
  const { data, fetching, error } = res;

  const dataNorm = useMemo(() => {
    return data?.regulationsCollection
      ? data.regulationsCollection.edges.map((val) => ({
          id: val.node.id as string,
          text: val.node.reg.toString(),
        }))
      : [{ id: "", text: "Select Regulation" }];
  }, [data]);

  return {
    loading: fetching,
    error,
    data: dataNorm,
    reExecuteQuery,
  };
};

export { regs, useRegulationsQuery };
