import { graphql } from "@/gql";
import { useMemo } from "react";
import { useQuery } from "urql";

export const getStudentReportQuery = graphql(`
  query GetStudentReportQuery($feedback_id: BigInt!) {
    staff_mappingCollection(filter: { id: { eq: $feedback_id } }) {
      edges {
        node {
          staff_profile {
            name
            departments {
              short_name
            }
          }
          subject {
            name
            short_name
            code
          }
          feedback {
            id
            batch
            departments {
              short_name
            }
            sem
            section
          }
        }
      }
    }
  }
`);

export const useGetStudentReportQuery = (feedback_id: number) => {
  const [res, reExecuteQuery] = useQuery({
    query: getStudentReportQuery,
    variables: { feedback_id },
  });

  const { data, fetching, error } = res;
  const dataNorm = useMemo(() => {
    return data?.staff_mappingCollection?.edges.map((staff) => {
      return {
        staff: {
          name: staff.node.staff_profile?.name!,
          department: staff.node.staff_profile?.departments?.short_name!,
        },
        subject: {
          name: staff.node.subject?.name.trim()!,
          subCode: staff.node.subject?.code.trim()!,
        },
        batch: staff.node.feedback?.batch!,
        semester: staff.node.feedback?.sem!,
        section: staff.node.feedback?.section!,
        department: staff.node.feedback?.departments?.short_name!,
      };
    })[0];
  }, [data]);

  return { data: dataNorm, loading: fetching, error };
};
