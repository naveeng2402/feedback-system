import { graphql } from "@/gql";

export const insertStudentResponse = graphql(`
  mutation InsertStudentResponse($feedback_id: BigInt!, $student_id: UUID!) {
    insertIntoresponseCollection(
      objects: { feedback_id: $feedback_id, student_id: $student_id }
    ) {
      affectedCount
      records {
        id
      }
    }
  }
`);

export const insertStudentAnswers = graphql(`
  mutation insertStudentsAnswers($objects: [answerInsertInput!]!) {
    insertIntoanswerCollection(objects: $objects) {
      affectedCount
    }
  }
`);
