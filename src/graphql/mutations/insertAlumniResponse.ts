import { graphql } from "@/gql";
import { useMutation } from "urql";

export const insertAlumniResponse = graphql(`
  mutation InsertIntoAlumniResponse(
    $alumni_name: String!
    $batch: String!
    $dept_id: BigInt!
  ) {
    insertIntoalumni_responseCollection(
      objects: { alumni_name: $alumni_name, batch: $batch, dept_id: $dept_id }
    ) {
      records {
        id
        alumni_name
      }
      affectedCount
    }
  }
`);

export const insertAlumniAnswers = graphql(`
  mutation InsertIntoAlumniAnswers($objects: [alumni_answersInsertInput!]!) {
    insertIntoalumni_answersCollection(objects: $objects) {
      affectedCount
    }
  }
`);
