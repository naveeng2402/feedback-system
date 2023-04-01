/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation InsertIntoAlumniResponse(\n    $alumni_name: String!\n    $batch: String!\n    $dept_id: BigInt!\n  ) {\n    insertIntoalumni_responseCollection(\n      objects: { alumni_name: $alumni_name, batch: $batch, dept_id: $dept_id }\n    ) {\n      records {\n        id\n        alumni_name\n      }\n      affectedCount\n    }\n  }\n": types.InsertIntoAlumniResponseDocument,
    "\n  mutation InsertIntoAlumniAnswers($objects: [alumni_answersInsertInput!]!) {\n    insertIntoalumni_answersCollection(objects: $objects) {\n      affectedCount\n    }\n  }\n": types.InsertIntoAlumniAnswersDocument,
    "\n  mutation InsertEmployerResponse($company: String!, $employer_name: String!) {\n    insertIntoemployer_responseCollection(\n      objects: { company: $company, employer_name: $employer_name }\n    ) {\n      affectedCount\n      records {\n        company\n        employer_name\n        id\n      }\n    }\n  }\n": types.InsertEmployerResponseDocument,
    "\n  mutation MyMutation($objects: [employer_answersInsertInput!]!) {\n    insertIntoemployer_answersCollection(objects: $objects) {\n      affectedCount\n    }\n  }\n": types.MyMutationDocument,
    "\n  query AlumniFeedbackQuery {\n    questionCollection(\n      filter: { feedback_type: { eq: \"A\" } }\n      orderBy: { question_no: AscNullsFirst }\n    ) {\n      edges {\n        node {\n          question_no\n          question\n          question_optionsCollection {\n            edges {\n              node {\n                option\n                value\n                id\n              }\n            }\n          }\n          no_of_options\n          id\n        }\n      }\n    }\n  }\n": types.AlumniFeedbackQueryDocument,
    "\n  query AlumniResponseResultQuery($id: BigInt) {\n    alumni_responseCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          alumni_name\n          batch\n          created_at\n          departments {\n            short_name\n          }\n          alumni_answersCollection {\n            edges {\n              node {\n                answer\n                question {\n                  question\n                  question_no\n                  question_optionsCollection {\n                    edges {\n                      node {\n                        option\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AlumniResponseResultQueryDocument,
    "\n  query MyQuery {\n    departmentsCollection {\n      edges {\n        node {\n          id\n          short_name\n        }\n      }\n    }\n  }\n": types.MyQueryDocument,
    "\n  query deptSubjectQuery($dept: BigInt!, $reg: BigInt!, $sem: BigInt!) {\n    dept_subjectCollection(\n      filter: {\n        dept_id: { eq: $dept }\n        reg_id: { eq: $reg }\n        sem: { eq: $sem }\n      }\n    ) {\n      edges {\n        node {\n          subject {\n            is_theory\n            name\n            code\n            category\n          }\n          id\n          sem\n          departments {\n            short_name\n          }\n        }\n      }\n    }\n  }\n": types.DeptSubjectQueryDocument,
    "\n  query EmployerFeedbackQuery {\n    questionCollection(\n      filter: { feedback_type: { eq: \"E\" } }\n      orderBy: { question_no: AscNullsLast }\n    ) {\n      edges {\n        node {\n          id\n          question_no\n          question\n          no_of_options\n        }\n      }\n    }\n  }\n": types.EmployerFeedbackQueryDocument,
    "\n  query EmployerResponseResultQuery($id: BigInt) {\n    employer_responseCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          employer_name\n          company\n          employer_answersCollection {\n            edges {\n              node {\n                question {\n                  question_no\n                  question\n                }\n                answer\n              }\n            }\n          }\n          created_at\n        }\n      }\n    }\n  }\n": types.EmployerResponseResultQueryDocument,
    "\n  query GetStudFeedbackList(\n    $batch: Int!\n    $dept: BigInt!\n    $section: String = \"\"\n  ) {\n    feedbackCollection(\n      filter: {\n        batch: { eq: $batch }\n        department_id: { eq: $dept }\n        section: { eq: $section }\n      }\n    ) {\n      edges {\n        node {\n          staff_mappingCollection {\n            edges {\n              node {\n                subject {\n                  code\n                  short_name\n                  name\n                  id\n                  is_theory\n                }\n                id\n                responseCollection {\n                  edges {\n                    node {\n                      id\n                    }\n                  }\n                }\n                staff_profile {\n                  name\n                  departments {\n                    short_name\n                    id\n                  }\n                }\n              }\n            }\n          }\n          id\n          sem\n        }\n      }\n    }\n  }\n": types.GetStudFeedbackListDocument,
    "\n  query regs {\n    regulationsCollection {\n      edges {\n        node {\n          reg\n          id\n          created_at\n        }\n      }\n    }\n  }\n": types.RegsDocument,
    "\n  query staffListQuery {\n    staff_profileCollection {\n      edges {\n        node {\n          name\n          staff_no\n          departments {\n            short_name\n          }\n          designation\n          id\n        }\n      }\n    }\n  }\n": types.StaffListQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InsertIntoAlumniResponse(\n    $alumni_name: String!\n    $batch: String!\n    $dept_id: BigInt!\n  ) {\n    insertIntoalumni_responseCollection(\n      objects: { alumni_name: $alumni_name, batch: $batch, dept_id: $dept_id }\n    ) {\n      records {\n        id\n        alumni_name\n      }\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation InsertIntoAlumniResponse(\n    $alumni_name: String!\n    $batch: String!\n    $dept_id: BigInt!\n  ) {\n    insertIntoalumni_responseCollection(\n      objects: { alumni_name: $alumni_name, batch: $batch, dept_id: $dept_id }\n    ) {\n      records {\n        id\n        alumni_name\n      }\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InsertIntoAlumniAnswers($objects: [alumni_answersInsertInput!]!) {\n    insertIntoalumni_answersCollection(objects: $objects) {\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation InsertIntoAlumniAnswers($objects: [alumni_answersInsertInput!]!) {\n    insertIntoalumni_answersCollection(objects: $objects) {\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InsertEmployerResponse($company: String!, $employer_name: String!) {\n    insertIntoemployer_responseCollection(\n      objects: { company: $company, employer_name: $employer_name }\n    ) {\n      affectedCount\n      records {\n        company\n        employer_name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation InsertEmployerResponse($company: String!, $employer_name: String!) {\n    insertIntoemployer_responseCollection(\n      objects: { company: $company, employer_name: $employer_name }\n    ) {\n      affectedCount\n      records {\n        company\n        employer_name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MyMutation($objects: [employer_answersInsertInput!]!) {\n    insertIntoemployer_answersCollection(objects: $objects) {\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation MyMutation($objects: [employer_answersInsertInput!]!) {\n    insertIntoemployer_answersCollection(objects: $objects) {\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AlumniFeedbackQuery {\n    questionCollection(\n      filter: { feedback_type: { eq: \"A\" } }\n      orderBy: { question_no: AscNullsFirst }\n    ) {\n      edges {\n        node {\n          question_no\n          question\n          question_optionsCollection {\n            edges {\n              node {\n                option\n                value\n                id\n              }\n            }\n          }\n          no_of_options\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AlumniFeedbackQuery {\n    questionCollection(\n      filter: { feedback_type: { eq: \"A\" } }\n      orderBy: { question_no: AscNullsFirst }\n    ) {\n      edges {\n        node {\n          question_no\n          question\n          question_optionsCollection {\n            edges {\n              node {\n                option\n                value\n                id\n              }\n            }\n          }\n          no_of_options\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AlumniResponseResultQuery($id: BigInt) {\n    alumni_responseCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          alumni_name\n          batch\n          created_at\n          departments {\n            short_name\n          }\n          alumni_answersCollection {\n            edges {\n              node {\n                answer\n                question {\n                  question\n                  question_no\n                  question_optionsCollection {\n                    edges {\n                      node {\n                        option\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AlumniResponseResultQuery($id: BigInt) {\n    alumni_responseCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          alumni_name\n          batch\n          created_at\n          departments {\n            short_name\n          }\n          alumni_answersCollection {\n            edges {\n              node {\n                answer\n                question {\n                  question\n                  question_no\n                  question_optionsCollection {\n                    edges {\n                      node {\n                        option\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyQuery {\n    departmentsCollection {\n      edges {\n        node {\n          id\n          short_name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyQuery {\n    departmentsCollection {\n      edges {\n        node {\n          id\n          short_name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query deptSubjectQuery($dept: BigInt!, $reg: BigInt!, $sem: BigInt!) {\n    dept_subjectCollection(\n      filter: {\n        dept_id: { eq: $dept }\n        reg_id: { eq: $reg }\n        sem: { eq: $sem }\n      }\n    ) {\n      edges {\n        node {\n          subject {\n            is_theory\n            name\n            code\n            category\n          }\n          id\n          sem\n          departments {\n            short_name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query deptSubjectQuery($dept: BigInt!, $reg: BigInt!, $sem: BigInt!) {\n    dept_subjectCollection(\n      filter: {\n        dept_id: { eq: $dept }\n        reg_id: { eq: $reg }\n        sem: { eq: $sem }\n      }\n    ) {\n      edges {\n        node {\n          subject {\n            is_theory\n            name\n            code\n            category\n          }\n          id\n          sem\n          departments {\n            short_name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EmployerFeedbackQuery {\n    questionCollection(\n      filter: { feedback_type: { eq: \"E\" } }\n      orderBy: { question_no: AscNullsLast }\n    ) {\n      edges {\n        node {\n          id\n          question_no\n          question\n          no_of_options\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EmployerFeedbackQuery {\n    questionCollection(\n      filter: { feedback_type: { eq: \"E\" } }\n      orderBy: { question_no: AscNullsLast }\n    ) {\n      edges {\n        node {\n          id\n          question_no\n          question\n          no_of_options\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EmployerResponseResultQuery($id: BigInt) {\n    employer_responseCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          employer_name\n          company\n          employer_answersCollection {\n            edges {\n              node {\n                question {\n                  question_no\n                  question\n                }\n                answer\n              }\n            }\n          }\n          created_at\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EmployerResponseResultQuery($id: BigInt) {\n    employer_responseCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          employer_name\n          company\n          employer_answersCollection {\n            edges {\n              node {\n                question {\n                  question_no\n                  question\n                }\n                answer\n              }\n            }\n          }\n          created_at\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStudFeedbackList(\n    $batch: Int!\n    $dept: BigInt!\n    $section: String = \"\"\n  ) {\n    feedbackCollection(\n      filter: {\n        batch: { eq: $batch }\n        department_id: { eq: $dept }\n        section: { eq: $section }\n      }\n    ) {\n      edges {\n        node {\n          staff_mappingCollection {\n            edges {\n              node {\n                subject {\n                  code\n                  short_name\n                  name\n                  id\n                  is_theory\n                }\n                id\n                responseCollection {\n                  edges {\n                    node {\n                      id\n                    }\n                  }\n                }\n                staff_profile {\n                  name\n                  departments {\n                    short_name\n                    id\n                  }\n                }\n              }\n            }\n          }\n          id\n          sem\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudFeedbackList(\n    $batch: Int!\n    $dept: BigInt!\n    $section: String = \"\"\n  ) {\n    feedbackCollection(\n      filter: {\n        batch: { eq: $batch }\n        department_id: { eq: $dept }\n        section: { eq: $section }\n      }\n    ) {\n      edges {\n        node {\n          staff_mappingCollection {\n            edges {\n              node {\n                subject {\n                  code\n                  short_name\n                  name\n                  id\n                  is_theory\n                }\n                id\n                responseCollection {\n                  edges {\n                    node {\n                      id\n                    }\n                  }\n                }\n                staff_profile {\n                  name\n                  departments {\n                    short_name\n                    id\n                  }\n                }\n              }\n            }\n          }\n          id\n          sem\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query regs {\n    regulationsCollection {\n      edges {\n        node {\n          reg\n          id\n          created_at\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query regs {\n    regulationsCollection {\n      edges {\n        node {\n          reg\n          id\n          created_at\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query staffListQuery {\n    staff_profileCollection {\n      edges {\n        node {\n          name\n          staff_no\n          departments {\n            short_name\n          }\n          designation\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query staffListQuery {\n    staff_profileCollection {\n      edges {\n        node {\n          name\n          staff_no\n          departments {\n            short_name\n          }\n          designation\n          id\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;