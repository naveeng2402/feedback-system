import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

const staffListQuery = graphql(`
  query staffListQuery {
    staff_profileCollection {
      edges {
        node {
          name
          staff_no
          departments {
            short_name
          }
          designation
          id
        }
      }
    }
  }
`);

export const useStaffListQuery = () => {
  const [res, reExecuteQuery] = useQuery({ query: staffListQuery });
  const { fetching, error, data } = res;
  const dataNorm = useMemo(() => {
    return data?.staff_profileCollection
      ? data.staff_profileCollection.edges.map((val) => ({
          id: val.node.id,
          name: val.node.name,
          department: val.node.departments?.short_name,
          staffNo: val.node.staff_no,
          designation: val.node.designation,
        }))
      : null;
  }, [data]);

  return {
    loading: fetching,
    error,
    data: dataNorm,
    reExecuteQuery,
  };
};
