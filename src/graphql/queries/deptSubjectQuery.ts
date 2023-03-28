import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

const deptSubjectQuery = graphql(`
  query deptSubjectQuery($dept: BigInt!, $reg: BigInt!, $sem: BigInt!) {
    dept_subjectCollection(
      filter: {
        dept_id: { eq: $dept }
        reg_id: { eq: $reg }
        sem: { eq: $sem }
      }
    ) {
      edges {
        node {
          subject {
            is_theory
            name
            code
            category
          }
          id
          sem
          departments {
            short_name
          }
        }
      }
    }
  }
`);

const useDeptSubjectQuery = (dept: string, reg: string, sem: string) => {
  const [res, reExecuteQuery] = useQuery({
    query: deptSubjectQuery,
    variables: { dept: parseInt(dept), reg: parseInt(reg), sem: parseInt(sem) },
  });

  const { fetching, data, error } = res;

  const dataNorm = useMemo(() => {
    if (
      fetching ||
      (fetching === false && data?.dept_subjectCollection?.edges.length === 0)
    )
      return [
        {
          id: "",
          subCode: "",
          subName: "",
          isTheory: false,
        },
      ];

    const res = data?.dept_subjectCollection?.edges;

    return res?.map((item) => ({
      id: item.node.id as string,
      subCode: item.node.subject?.code!,
      subName: item.node.subject?.name!,
      isTheory: item.node.subject?.is_theory!,
    }));
  }, [data]);

  return { data: dataNorm, reExecuteQuery };
};

export { deptSubjectQuery, useDeptSubjectQuery };
