/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `alumni_answers` collection */
  deleteFromalumni_answersCollection: Alumni_AnswersDeleteResponse;
  /** Deletes zero or more records from the `alumni_response` collection */
  deleteFromalumni_responseCollection: Alumni_ResponseDeleteResponse;
  /** Deletes zero or more records from the `answer` collection */
  deleteFromanswerCollection: AnswerDeleteResponse;
  /** Deletes zero or more records from the `departments` collection */
  deleteFromdepartmentsCollection: DepartmentsDeleteResponse;
  /** Deletes zero or more records from the `dept_subject` collection */
  deleteFromdept_subjectCollection: Dept_SubjectDeleteResponse;
  /** Deletes zero or more records from the `employer_answers` collection */
  deleteFromemployer_answersCollection: Employer_AnswersDeleteResponse;
  /** Deletes zero or more records from the `employer_response` collection */
  deleteFromemployer_responseCollection: Employer_ResponseDeleteResponse;
  /** Deletes zero or more records from the `feedback` collection */
  deleteFromfeedbackCollection: FeedbackDeleteResponse;
  /** Deletes zero or more records from the `feedback_questions` collection */
  deleteFromfeedback_questionsCollection: Feedback_QuestionsDeleteResponse;
  /** Deletes zero or more records from the `question` collection */
  deleteFromquestionCollection: QuestionDeleteResponse;
  /** Deletes zero or more records from the `question_options` collection */
  deleteFromquestion_optionsCollection: Question_OptionsDeleteResponse;
  /** Deletes zero or more records from the `regulations` collection */
  deleteFromregulationsCollection: RegulationsDeleteResponse;
  /** Deletes zero or more records from the `response` collection */
  deleteFromresponseCollection: ResponseDeleteResponse;
  /** Deletes zero or more records from the `staff_mapping` collection */
  deleteFromstaff_mappingCollection: Staff_MappingDeleteResponse;
  /** Deletes zero or more records from the `staff_profile` collection */
  deleteFromstaff_profileCollection: Staff_ProfileDeleteResponse;
  /** Deletes zero or more records from the `student_profile` collection */
  deleteFromstudent_profileCollection: Student_ProfileDeleteResponse;
  /** Deletes zero or more records from the `subject` collection */
  deleteFromsubjectCollection: SubjectDeleteResponse;
  /** Adds one or more `alumni_answers` records to the collection */
  insertIntoalumni_answersCollection?: Maybe<Alumni_AnswersInsertResponse>;
  /** Adds one or more `alumni_response` records to the collection */
  insertIntoalumni_responseCollection?: Maybe<Alumni_ResponseInsertResponse>;
  /** Adds one or more `answer` records to the collection */
  insertIntoanswerCollection?: Maybe<AnswerInsertResponse>;
  /** Adds one or more `departments` records to the collection */
  insertIntodepartmentsCollection?: Maybe<DepartmentsInsertResponse>;
  /** Adds one or more `dept_subject` records to the collection */
  insertIntodept_subjectCollection?: Maybe<Dept_SubjectInsertResponse>;
  /** Adds one or more `employer_answers` records to the collection */
  insertIntoemployer_answersCollection?: Maybe<Employer_AnswersInsertResponse>;
  /** Adds one or more `employer_response` records to the collection */
  insertIntoemployer_responseCollection?: Maybe<Employer_ResponseInsertResponse>;
  /** Adds one or more `feedback` records to the collection */
  insertIntofeedbackCollection?: Maybe<FeedbackInsertResponse>;
  /** Adds one or more `feedback_questions` records to the collection */
  insertIntofeedback_questionsCollection?: Maybe<Feedback_QuestionsInsertResponse>;
  /** Adds one or more `question` records to the collection */
  insertIntoquestionCollection?: Maybe<QuestionInsertResponse>;
  /** Adds one or more `question_options` records to the collection */
  insertIntoquestion_optionsCollection?: Maybe<Question_OptionsInsertResponse>;
  /** Adds one or more `regulations` records to the collection */
  insertIntoregulationsCollection?: Maybe<RegulationsInsertResponse>;
  /** Adds one or more `response` records to the collection */
  insertIntoresponseCollection?: Maybe<ResponseInsertResponse>;
  /** Adds one or more `staff_mapping` records to the collection */
  insertIntostaff_mappingCollection?: Maybe<Staff_MappingInsertResponse>;
  /** Adds one or more `staff_profile` records to the collection */
  insertIntostaff_profileCollection?: Maybe<Staff_ProfileInsertResponse>;
  /** Adds one or more `student_profile` records to the collection */
  insertIntostudent_profileCollection?: Maybe<Student_ProfileInsertResponse>;
  /** Adds one or more `subject` records to the collection */
  insertIntosubjectCollection?: Maybe<SubjectInsertResponse>;
  /** Updates zero or more records in the `alumni_answers` collection */
  updatealumni_answersCollection: Alumni_AnswersUpdateResponse;
  /** Updates zero or more records in the `alumni_response` collection */
  updatealumni_responseCollection: Alumni_ResponseUpdateResponse;
  /** Updates zero or more records in the `answer` collection */
  updateanswerCollection: AnswerUpdateResponse;
  /** Updates zero or more records in the `departments` collection */
  updatedepartmentsCollection: DepartmentsUpdateResponse;
  /** Updates zero or more records in the `dept_subject` collection */
  updatedept_subjectCollection: Dept_SubjectUpdateResponse;
  /** Updates zero or more records in the `employer_answers` collection */
  updateemployer_answersCollection: Employer_AnswersUpdateResponse;
  /** Updates zero or more records in the `employer_response` collection */
  updateemployer_responseCollection: Employer_ResponseUpdateResponse;
  /** Updates zero or more records in the `feedback` collection */
  updatefeedbackCollection: FeedbackUpdateResponse;
  /** Updates zero or more records in the `feedback_questions` collection */
  updatefeedback_questionsCollection: Feedback_QuestionsUpdateResponse;
  /** Updates zero or more records in the `question` collection */
  updatequestionCollection: QuestionUpdateResponse;
  /** Updates zero or more records in the `question_options` collection */
  updatequestion_optionsCollection: Question_OptionsUpdateResponse;
  /** Updates zero or more records in the `regulations` collection */
  updateregulationsCollection: RegulationsUpdateResponse;
  /** Updates zero or more records in the `response` collection */
  updateresponseCollection: ResponseUpdateResponse;
  /** Updates zero or more records in the `staff_mapping` collection */
  updatestaff_mappingCollection: Staff_MappingUpdateResponse;
  /** Updates zero or more records in the `staff_profile` collection */
  updatestaff_profileCollection: Staff_ProfileUpdateResponse;
  /** Updates zero or more records in the `student_profile` collection */
  updatestudent_profileCollection: Student_ProfileUpdateResponse;
  /** Updates zero or more records in the `subject` collection */
  updatesubjectCollection: SubjectUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromalumni_AnswersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Alumni_AnswersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromalumni_ResponseCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Alumni_ResponseFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromanswerCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<AnswerFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromdepartmentsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<DepartmentsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromdept_SubjectCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Dept_SubjectFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromemployer_AnswersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Employer_AnswersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromemployer_ResponseCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Employer_ResponseFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromfeedbackCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<FeedbackFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromfeedback_QuestionsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Feedback_QuestionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromquestionCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<QuestionFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromquestion_OptionsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Question_OptionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromregulationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<RegulationsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromresponseCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ResponseFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstaff_MappingCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Staff_MappingFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstaff_ProfileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Staff_ProfileFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstudent_ProfileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Student_ProfileFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsubjectCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SubjectFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoalumni_AnswersCollectionArgs = {
  objects: Array<Alumni_AnswersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoalumni_ResponseCollectionArgs = {
  objects: Array<Alumni_ResponseInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoanswerCollectionArgs = {
  objects: Array<AnswerInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntodepartmentsCollectionArgs = {
  objects: Array<DepartmentsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntodept_SubjectCollectionArgs = {
  objects: Array<Dept_SubjectInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoemployer_AnswersCollectionArgs = {
  objects: Array<Employer_AnswersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoemployer_ResponseCollectionArgs = {
  objects: Array<Employer_ResponseInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntofeedbackCollectionArgs = {
  objects: Array<FeedbackInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntofeedback_QuestionsCollectionArgs = {
  objects: Array<Feedback_QuestionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoquestionCollectionArgs = {
  objects: Array<QuestionInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoquestion_OptionsCollectionArgs = {
  objects: Array<Question_OptionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoregulationsCollectionArgs = {
  objects: Array<RegulationsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoresponseCollectionArgs = {
  objects: Array<ResponseInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostaff_MappingCollectionArgs = {
  objects: Array<Staff_MappingInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostaff_ProfileCollectionArgs = {
  objects: Array<Staff_ProfileInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostudent_ProfileCollectionArgs = {
  objects: Array<Student_ProfileInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosubjectCollectionArgs = {
  objects: Array<SubjectInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatealumni_AnswersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Alumni_AnswersFilter>;
  set: Alumni_AnswersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatealumni_ResponseCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Alumni_ResponseFilter>;
  set: Alumni_ResponseUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateanswerCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<AnswerFilter>;
  set: AnswerUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatedepartmentsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<DepartmentsFilter>;
  set: DepartmentsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatedept_SubjectCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Dept_SubjectFilter>;
  set: Dept_SubjectUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateemployer_AnswersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Employer_AnswersFilter>;
  set: Employer_AnswersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateemployer_ResponseCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Employer_ResponseFilter>;
  set: Employer_ResponseUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatefeedbackCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<FeedbackFilter>;
  set: FeedbackUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatefeedback_QuestionsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Feedback_QuestionsFilter>;
  set: Feedback_QuestionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatequestionCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<QuestionFilter>;
  set: QuestionUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatequestion_OptionsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Question_OptionsFilter>;
  set: Question_OptionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateregulationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<RegulationsFilter>;
  set: RegulationsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateresponseCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ResponseFilter>;
  set: ResponseUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestaff_MappingCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Staff_MappingFilter>;
  set: Staff_MappingUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestaff_ProfileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Staff_ProfileFilter>;
  set: Staff_ProfileUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestudent_ProfileCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Student_ProfileFilter>;
  set: Student_ProfileUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesubjectCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SubjectFilter>;
  set: SubjectUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `alumni_answers` */
  alumni_answersCollection?: Maybe<Alumni_AnswersConnection>;
  /** A pagable collection of type `alumni_response` */
  alumni_responseCollection?: Maybe<Alumni_ResponseConnection>;
  /** A pagable collection of type `answer` */
  answerCollection?: Maybe<AnswerConnection>;
  /** A pagable collection of type `departments` */
  departmentsCollection?: Maybe<DepartmentsConnection>;
  /** A pagable collection of type `dept_subject` */
  dept_subjectCollection?: Maybe<Dept_SubjectConnection>;
  /** A pagable collection of type `employer_answers` */
  employer_answersCollection?: Maybe<Employer_AnswersConnection>;
  /** A pagable collection of type `employer_response` */
  employer_responseCollection?: Maybe<Employer_ResponseConnection>;
  /** A pagable collection of type `feedback` */
  feedbackCollection?: Maybe<FeedbackConnection>;
  /** A pagable collection of type `feedback_questions` */
  feedback_questionsCollection?: Maybe<Feedback_QuestionsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `question` */
  questionCollection?: Maybe<QuestionConnection>;
  /** A pagable collection of type `question_options` */
  question_optionsCollection?: Maybe<Question_OptionsConnection>;
  /** A pagable collection of type `regulations` */
  regulationsCollection?: Maybe<RegulationsConnection>;
  /** A pagable collection of type `response` */
  responseCollection?: Maybe<ResponseConnection>;
  /** A pagable collection of type `staff_mapping` */
  staff_mappingCollection?: Maybe<Staff_MappingConnection>;
  /** A pagable collection of type `staff_profile` */
  staff_profileCollection?: Maybe<Staff_ProfileConnection>;
  /** A pagable collection of type `student_profile` */
  student_profileCollection?: Maybe<Student_ProfileConnection>;
  /** A pagable collection of type `subject` */
  subjectCollection?: Maybe<SubjectConnection>;
};


/** The root type for querying data */
export type QueryAlumni_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Alumni_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Alumni_AnswersOrderBy>>;
};


/** The root type for querying data */
export type QueryAlumni_ResponseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Alumni_ResponseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Alumni_ResponseOrderBy>>;
};


/** The root type for querying data */
export type QueryAnswerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AnswerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AnswerOrderBy>>;
};


/** The root type for querying data */
export type QueryDepartmentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<DepartmentsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};


/** The root type for querying data */
export type QueryDept_SubjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Dept_SubjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Dept_SubjectOrderBy>>;
};


/** The root type for querying data */
export type QueryEmployer_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Employer_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Employer_AnswersOrderBy>>;
};


/** The root type for querying data */
export type QueryEmployer_ResponseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Employer_ResponseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Employer_ResponseOrderBy>>;
};


/** The root type for querying data */
export type QueryFeedbackCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FeedbackOrderBy>>;
};


/** The root type for querying data */
export type QueryFeedback_QuestionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Feedback_QuestionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Feedback_QuestionsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryQuestionCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<QuestionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QuestionOrderBy>>;
};


/** The root type for querying data */
export type QueryQuestion_OptionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Question_OptionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Question_OptionsOrderBy>>;
};


/** The root type for querying data */
export type QueryRegulationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<RegulationsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RegulationsOrderBy>>;
};


/** The root type for querying data */
export type QueryResponseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ResponseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ResponseOrderBy>>;
};


/** The root type for querying data */
export type QueryStaff_MappingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Staff_MappingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Staff_MappingOrderBy>>;
};


/** The root type for querying data */
export type QueryStaff_ProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Staff_ProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Staff_ProfileOrderBy>>;
};


/** The root type for querying data */
export type QueryStudent_ProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Student_ProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Student_ProfileOrderBy>>;
};


/** The root type for querying data */
export type QuerySubjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SubjectOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Alumni_Answers = Node & {
  __typename?: 'alumni_answers';
  alumni_res_id?: Maybe<Scalars['BigInt']>;
  alumni_response?: Maybe<Alumni_Response>;
  answer?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  question?: Maybe<Question>;
  question_id?: Maybe<Scalars['BigInt']>;
};

export type Alumni_AnswersConnection = {
  __typename?: 'alumni_answersConnection';
  edges: Array<Alumni_AnswersEdge>;
  pageInfo: PageInfo;
};

export type Alumni_AnswersDeleteResponse = {
  __typename?: 'alumni_answersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Alumni_Answers>;
};

export type Alumni_AnswersEdge = {
  __typename?: 'alumni_answersEdge';
  cursor: Scalars['String'];
  node: Alumni_Answers;
};

export type Alumni_AnswersFilter = {
  alumni_res_id?: InputMaybe<BigIntFilter>;
  answer?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  question_id?: InputMaybe<BigIntFilter>;
};

export type Alumni_AnswersInsertInput = {
  alumni_res_id?: InputMaybe<Scalars['BigInt']>;
  answer?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
};

export type Alumni_AnswersInsertResponse = {
  __typename?: 'alumni_answersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Alumni_Answers>;
};

export type Alumni_AnswersOrderBy = {
  alumni_res_id?: InputMaybe<OrderByDirection>;
  answer?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  question_id?: InputMaybe<OrderByDirection>;
};

export type Alumni_AnswersUpdateInput = {
  alumni_res_id?: InputMaybe<Scalars['BigInt']>;
  answer?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
};

export type Alumni_AnswersUpdateResponse = {
  __typename?: 'alumni_answersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Alumni_Answers>;
};

export type Alumni_Response = Node & {
  __typename?: 'alumni_response';
  alumni_answersCollection?: Maybe<Alumni_AnswersConnection>;
  alumni_name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Datetime']>;
  departments?: Maybe<Departments>;
  dept_id?: Maybe<Scalars['BigInt']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};


export type Alumni_ResponseAlumni_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Alumni_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Alumni_AnswersOrderBy>>;
};

export type Alumni_ResponseConnection = {
  __typename?: 'alumni_responseConnection';
  edges: Array<Alumni_ResponseEdge>;
  pageInfo: PageInfo;
};

export type Alumni_ResponseDeleteResponse = {
  __typename?: 'alumni_responseDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Alumni_Response>;
};

export type Alumni_ResponseEdge = {
  __typename?: 'alumni_responseEdge';
  cursor: Scalars['String'];
  node: Alumni_Response;
};

export type Alumni_ResponseFilter = {
  alumni_name?: InputMaybe<StringFilter>;
  batch?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  dept_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Alumni_ResponseInsertInput = {
  alumni_name?: InputMaybe<Scalars['String']>;
  batch?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
};

export type Alumni_ResponseInsertResponse = {
  __typename?: 'alumni_responseInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Alumni_Response>;
};

export type Alumni_ResponseOrderBy = {
  alumni_name?: InputMaybe<OrderByDirection>;
  batch?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  dept_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type Alumni_ResponseUpdateInput = {
  alumni_name?: InputMaybe<Scalars['String']>;
  batch?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
};

export type Alumni_ResponseUpdateResponse = {
  __typename?: 'alumni_responseUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Alumni_Response>;
};

export type Answer = Node & {
  __typename?: 'answer';
  answer?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  question?: Maybe<Question>;
  question_id?: Maybe<Scalars['BigInt']>;
  response?: Maybe<Response>;
  response_id?: Maybe<Scalars['BigInt']>;
};

export type AnswerConnection = {
  __typename?: 'answerConnection';
  edges: Array<AnswerEdge>;
  pageInfo: PageInfo;
};

export type AnswerDeleteResponse = {
  __typename?: 'answerDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Answer>;
};

export type AnswerEdge = {
  __typename?: 'answerEdge';
  cursor: Scalars['String'];
  node: Answer;
};

export type AnswerFilter = {
  answer?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  question_id?: InputMaybe<BigIntFilter>;
  response_id?: InputMaybe<BigIntFilter>;
};

export type AnswerInsertInput = {
  answer?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
  response_id?: InputMaybe<Scalars['BigInt']>;
};

export type AnswerInsertResponse = {
  __typename?: 'answerInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Answer>;
};

export type AnswerOrderBy = {
  answer?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  question_id?: InputMaybe<OrderByDirection>;
  response_id?: InputMaybe<OrderByDirection>;
};

export type AnswerUpdateInput = {
  answer?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
  response_id?: InputMaybe<Scalars['BigInt']>;
};

export type AnswerUpdateResponse = {
  __typename?: 'answerUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Answer>;
};

export type Departments = Node & {
  __typename?: 'departments';
  alumni_responseCollection?: Maybe<Alumni_ResponseConnection>;
  created_at?: Maybe<Scalars['Datetime']>;
  dept_subjectCollection?: Maybe<Dept_SubjectConnection>;
  feedbackCollection?: Maybe<FeedbackConnection>;
  id: Scalars['BigInt'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  short_name: Scalars['String'];
  staff_profileCollection?: Maybe<Staff_ProfileConnection>;
  student_profileCollection?: Maybe<Student_ProfileConnection>;
};


export type DepartmentsAlumni_ResponseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Alumni_ResponseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Alumni_ResponseOrderBy>>;
};


export type DepartmentsDept_SubjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Dept_SubjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Dept_SubjectOrderBy>>;
};


export type DepartmentsFeedbackCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FeedbackOrderBy>>;
};


export type DepartmentsStaff_ProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Staff_ProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Staff_ProfileOrderBy>>;
};


export type DepartmentsStudent_ProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Student_ProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Student_ProfileOrderBy>>;
};

export type DepartmentsConnection = {
  __typename?: 'departmentsConnection';
  edges: Array<DepartmentsEdge>;
  pageInfo: PageInfo;
};

export type DepartmentsDeleteResponse = {
  __typename?: 'departmentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Departments>;
};

export type DepartmentsEdge = {
  __typename?: 'departmentsEdge';
  cursor: Scalars['String'];
  node: Departments;
};

export type DepartmentsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  short_name?: InputMaybe<StringFilter>;
};

export type DepartmentsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
};

export type DepartmentsInsertResponse = {
  __typename?: 'departmentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Departments>;
};

export type DepartmentsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  short_name?: InputMaybe<OrderByDirection>;
};

export type DepartmentsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
};

export type DepartmentsUpdateResponse = {
  __typename?: 'departmentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Departments>;
};

export type Dept_Subject = Node & {
  __typename?: 'dept_subject';
  created_at?: Maybe<Scalars['Datetime']>;
  departments?: Maybe<Departments>;
  dept_id?: Maybe<Scalars['BigInt']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  reg_id?: Maybe<Scalars['BigInt']>;
  regulations?: Maybe<Regulations>;
  sem: Scalars['BigInt'];
  subject?: Maybe<Subject>;
  subject_id?: Maybe<Scalars['BigInt']>;
};

export type Dept_SubjectConnection = {
  __typename?: 'dept_subjectConnection';
  edges: Array<Dept_SubjectEdge>;
  pageInfo: PageInfo;
};

export type Dept_SubjectDeleteResponse = {
  __typename?: 'dept_subjectDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Dept_Subject>;
};

export type Dept_SubjectEdge = {
  __typename?: 'dept_subjectEdge';
  cursor: Scalars['String'];
  node: Dept_Subject;
};

export type Dept_SubjectFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  dept_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  reg_id?: InputMaybe<BigIntFilter>;
  sem?: InputMaybe<BigIntFilter>;
  subject_id?: InputMaybe<BigIntFilter>;
};

export type Dept_SubjectInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
  reg_id?: InputMaybe<Scalars['BigInt']>;
  sem?: InputMaybe<Scalars['BigInt']>;
  subject_id?: InputMaybe<Scalars['BigInt']>;
};

export type Dept_SubjectInsertResponse = {
  __typename?: 'dept_subjectInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Dept_Subject>;
};

export type Dept_SubjectOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  dept_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  reg_id?: InputMaybe<OrderByDirection>;
  sem?: InputMaybe<OrderByDirection>;
  subject_id?: InputMaybe<OrderByDirection>;
};

export type Dept_SubjectUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
  reg_id?: InputMaybe<Scalars['BigInt']>;
  sem?: InputMaybe<Scalars['BigInt']>;
  subject_id?: InputMaybe<Scalars['BigInt']>;
};

export type Dept_SubjectUpdateResponse = {
  __typename?: 'dept_subjectUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Dept_Subject>;
};

export type Employer_Answers = Node & {
  __typename?: 'employer_answers';
  answer?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Datetime']>;
  employer_res_id?: Maybe<Scalars['BigInt']>;
  employer_response?: Maybe<Employer_Response>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  question?: Maybe<Question>;
  question_id?: Maybe<Scalars['BigInt']>;
};

export type Employer_AnswersConnection = {
  __typename?: 'employer_answersConnection';
  edges: Array<Employer_AnswersEdge>;
  pageInfo: PageInfo;
};

export type Employer_AnswersDeleteResponse = {
  __typename?: 'employer_answersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Employer_Answers>;
};

export type Employer_AnswersEdge = {
  __typename?: 'employer_answersEdge';
  cursor: Scalars['String'];
  node: Employer_Answers;
};

export type Employer_AnswersFilter = {
  answer?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  employer_res_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  question_id?: InputMaybe<BigIntFilter>;
};

export type Employer_AnswersInsertInput = {
  answer?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  employer_res_id?: InputMaybe<Scalars['BigInt']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
};

export type Employer_AnswersInsertResponse = {
  __typename?: 'employer_answersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Employer_Answers>;
};

export type Employer_AnswersOrderBy = {
  answer?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  employer_res_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  question_id?: InputMaybe<OrderByDirection>;
};

export type Employer_AnswersUpdateInput = {
  answer?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  employer_res_id?: InputMaybe<Scalars['BigInt']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
};

export type Employer_AnswersUpdateResponse = {
  __typename?: 'employer_answersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Employer_Answers>;
};

export type Employer_Response = Node & {
  __typename?: 'employer_response';
  company?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Datetime']>;
  employer_answersCollection?: Maybe<Employer_AnswersConnection>;
  employer_name?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};


export type Employer_ResponseEmployer_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Employer_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Employer_AnswersOrderBy>>;
};

export type Employer_ResponseConnection = {
  __typename?: 'employer_responseConnection';
  edges: Array<Employer_ResponseEdge>;
  pageInfo: PageInfo;
};

export type Employer_ResponseDeleteResponse = {
  __typename?: 'employer_responseDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Employer_Response>;
};

export type Employer_ResponseEdge = {
  __typename?: 'employer_responseEdge';
  cursor: Scalars['String'];
  node: Employer_Response;
};

export type Employer_ResponseFilter = {
  company?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  employer_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Employer_ResponseInsertInput = {
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  employer_name?: InputMaybe<Scalars['String']>;
};

export type Employer_ResponseInsertResponse = {
  __typename?: 'employer_responseInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Employer_Response>;
};

export type Employer_ResponseOrderBy = {
  company?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  employer_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type Employer_ResponseUpdateInput = {
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  employer_name?: InputMaybe<Scalars['String']>;
};

export type Employer_ResponseUpdateResponse = {
  __typename?: 'employer_responseUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Employer_Response>;
};

export type Feedback = Node & {
  __typename?: 'feedback';
  batch: Scalars['Int'];
  created_at?: Maybe<Scalars['Datetime']>;
  department_id: Scalars['BigInt'];
  departments?: Maybe<Departments>;
  feedback_questionsCollection?: Maybe<Feedback_QuestionsConnection>;
  id: Scalars['BigInt'];
  is_published: Scalars['Boolean'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  regulation_id: Scalars['BigInt'];
  regulations?: Maybe<Regulations>;
  section?: Maybe<Scalars['String']>;
  sem: Scalars['Int'];
  staff_mappingCollection?: Maybe<Staff_MappingConnection>;
};


export type FeedbackFeedback_QuestionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Feedback_QuestionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Feedback_QuestionsOrderBy>>;
};


export type FeedbackStaff_MappingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Staff_MappingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Staff_MappingOrderBy>>;
};

export type FeedbackConnection = {
  __typename?: 'feedbackConnection';
  edges: Array<FeedbackEdge>;
  pageInfo: PageInfo;
};

export type FeedbackDeleteResponse = {
  __typename?: 'feedbackDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Feedback>;
};

export type FeedbackEdge = {
  __typename?: 'feedbackEdge';
  cursor: Scalars['String'];
  node: Feedback;
};

export type FeedbackFilter = {
  batch?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  department_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  is_published?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  regulation_id?: InputMaybe<BigIntFilter>;
  section?: InputMaybe<StringFilter>;
  sem?: InputMaybe<IntFilter>;
};

export type FeedbackInsertInput = {
  batch?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  department_id?: InputMaybe<Scalars['BigInt']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  regulation_id?: InputMaybe<Scalars['BigInt']>;
  section?: InputMaybe<Scalars['String']>;
  sem?: InputMaybe<Scalars['Int']>;
};

export type FeedbackInsertResponse = {
  __typename?: 'feedbackInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Feedback>;
};

export type FeedbackOrderBy = {
  batch?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  department_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_published?: InputMaybe<OrderByDirection>;
  regulation_id?: InputMaybe<OrderByDirection>;
  section?: InputMaybe<OrderByDirection>;
  sem?: InputMaybe<OrderByDirection>;
};

export type FeedbackUpdateInput = {
  batch?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  department_id?: InputMaybe<Scalars['BigInt']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  regulation_id?: InputMaybe<Scalars['BigInt']>;
  section?: InputMaybe<Scalars['String']>;
  sem?: InputMaybe<Scalars['Int']>;
};

export type FeedbackUpdateResponse = {
  __typename?: 'feedbackUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Feedback>;
};

export type Feedback_Questions = Node & {
  __typename?: 'feedback_questions';
  created_at?: Maybe<Scalars['Datetime']>;
  feedback?: Maybe<Feedback>;
  feedback_id?: Maybe<Scalars['BigInt']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  question?: Maybe<Question>;
  question_id?: Maybe<Scalars['BigInt']>;
};

export type Feedback_QuestionsConnection = {
  __typename?: 'feedback_questionsConnection';
  edges: Array<Feedback_QuestionsEdge>;
  pageInfo: PageInfo;
};

export type Feedback_QuestionsDeleteResponse = {
  __typename?: 'feedback_questionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Feedback_Questions>;
};

export type Feedback_QuestionsEdge = {
  __typename?: 'feedback_questionsEdge';
  cursor: Scalars['String'];
  node: Feedback_Questions;
};

export type Feedback_QuestionsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  feedback_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  question_id?: InputMaybe<BigIntFilter>;
};

export type Feedback_QuestionsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_id?: InputMaybe<Scalars['BigInt']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
};

export type Feedback_QuestionsInsertResponse = {
  __typename?: 'feedback_questionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Feedback_Questions>;
};

export type Feedback_QuestionsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  feedback_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  question_id?: InputMaybe<OrderByDirection>;
};

export type Feedback_QuestionsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_id?: InputMaybe<Scalars['BigInt']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
};

export type Feedback_QuestionsUpdateResponse = {
  __typename?: 'feedback_questionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Feedback_Questions>;
};

export type Question = Node & {
  __typename?: 'question';
  alumni_answersCollection?: Maybe<Alumni_AnswersConnection>;
  answerCollection?: Maybe<AnswerConnection>;
  created_at?: Maybe<Scalars['Datetime']>;
  employer_answersCollection?: Maybe<Employer_AnswersConnection>;
  feedback_questionsCollection?: Maybe<Feedback_QuestionsConnection>;
  feedback_type: Scalars['String'];
  id: Scalars['BigInt'];
  no_of_options?: Maybe<Scalars['Int']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  question?: Maybe<Scalars['String']>;
  question_no?: Maybe<Scalars['Int']>;
  question_optionsCollection?: Maybe<Question_OptionsConnection>;
};


export type QuestionAlumni_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Alumni_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Alumni_AnswersOrderBy>>;
};


export type QuestionAnswerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AnswerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AnswerOrderBy>>;
};


export type QuestionEmployer_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Employer_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Employer_AnswersOrderBy>>;
};


export type QuestionFeedback_QuestionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Feedback_QuestionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Feedback_QuestionsOrderBy>>;
};


export type QuestionQuestion_OptionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Question_OptionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Question_OptionsOrderBy>>;
};

export type QuestionConnection = {
  __typename?: 'questionConnection';
  edges: Array<QuestionEdge>;
  pageInfo: PageInfo;
};

export type QuestionDeleteResponse = {
  __typename?: 'questionDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Question>;
};

export type QuestionEdge = {
  __typename?: 'questionEdge';
  cursor: Scalars['String'];
  node: Question;
};

export type QuestionFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  feedback_type?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  no_of_options?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  question?: InputMaybe<StringFilter>;
  question_no?: InputMaybe<IntFilter>;
};

export type QuestionInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_type?: InputMaybe<Scalars['String']>;
  no_of_options?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['String']>;
  question_no?: InputMaybe<Scalars['Int']>;
};

export type QuestionInsertResponse = {
  __typename?: 'questionInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Question>;
};

export type QuestionOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  feedback_type?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  no_of_options?: InputMaybe<OrderByDirection>;
  question?: InputMaybe<OrderByDirection>;
  question_no?: InputMaybe<OrderByDirection>;
};

export type QuestionUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_type?: InputMaybe<Scalars['String']>;
  no_of_options?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['String']>;
  question_no?: InputMaybe<Scalars['Int']>;
};

export type QuestionUpdateResponse = {
  __typename?: 'questionUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Question>;
};

export type Question_Options = Node & {
  __typename?: 'question_options';
  created_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  option?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  question_id?: Maybe<Scalars['BigInt']>;
  value?: Maybe<Scalars['Int']>;
};

export type Question_OptionsConnection = {
  __typename?: 'question_optionsConnection';
  edges: Array<Question_OptionsEdge>;
  pageInfo: PageInfo;
};

export type Question_OptionsDeleteResponse = {
  __typename?: 'question_optionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Question_Options>;
};

export type Question_OptionsEdge = {
  __typename?: 'question_optionsEdge';
  cursor: Scalars['String'];
  node: Question_Options;
};

export type Question_OptionsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  option?: InputMaybe<StringFilter>;
  question_id?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<IntFilter>;
};

export type Question_OptionsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  option?: InputMaybe<Scalars['String']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type Question_OptionsInsertResponse = {
  __typename?: 'question_optionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Question_Options>;
};

export type Question_OptionsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  option?: InputMaybe<OrderByDirection>;
  question_id?: InputMaybe<OrderByDirection>;
  value?: InputMaybe<OrderByDirection>;
};

export type Question_OptionsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  option?: InputMaybe<Scalars['String']>;
  question_id?: InputMaybe<Scalars['BigInt']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type Question_OptionsUpdateResponse = {
  __typename?: 'question_optionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Question_Options>;
};

export type Regulations = Node & {
  __typename?: 'regulations';
  created_at: Scalars['Datetime'];
  dept_subjectCollection?: Maybe<Dept_SubjectConnection>;
  feedbackCollection?: Maybe<FeedbackConnection>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  reg: Scalars['Int'];
  subjectCollection?: Maybe<SubjectConnection>;
};


export type RegulationsDept_SubjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Dept_SubjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Dept_SubjectOrderBy>>;
};


export type RegulationsFeedbackCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FeedbackOrderBy>>;
};


export type RegulationsSubjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SubjectOrderBy>>;
};

export type RegulationsConnection = {
  __typename?: 'regulationsConnection';
  edges: Array<RegulationsEdge>;
  pageInfo: PageInfo;
};

export type RegulationsDeleteResponse = {
  __typename?: 'regulationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Regulations>;
};

export type RegulationsEdge = {
  __typename?: 'regulationsEdge';
  cursor: Scalars['String'];
  node: Regulations;
};

export type RegulationsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  reg?: InputMaybe<IntFilter>;
};

export type RegulationsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  reg?: InputMaybe<Scalars['Int']>;
};

export type RegulationsInsertResponse = {
  __typename?: 'regulationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Regulations>;
};

export type RegulationsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  reg?: InputMaybe<OrderByDirection>;
};

export type RegulationsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  reg?: InputMaybe<Scalars['Int']>;
};

export type RegulationsUpdateResponse = {
  __typename?: 'regulationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Regulations>;
};

export type Response = Node & {
  __typename?: 'response';
  answerCollection?: Maybe<AnswerConnection>;
  created_at?: Maybe<Scalars['Datetime']>;
  feedback_id?: Maybe<Scalars['BigInt']>;
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  staff_mapping?: Maybe<Staff_Mapping>;
  student_id?: Maybe<Scalars['UUID']>;
  student_profile?: Maybe<Student_Profile>;
};


export type ResponseAnswerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AnswerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AnswerOrderBy>>;
};

export type ResponseConnection = {
  __typename?: 'responseConnection';
  edges: Array<ResponseEdge>;
  pageInfo: PageInfo;
};

export type ResponseDeleteResponse = {
  __typename?: 'responseDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Response>;
};

export type ResponseEdge = {
  __typename?: 'responseEdge';
  cursor: Scalars['String'];
  node: Response;
};

export type ResponseFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  feedback_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  student_id?: InputMaybe<UuidFilter>;
};

export type ResponseInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_id?: InputMaybe<Scalars['BigInt']>;
  student_id?: InputMaybe<Scalars['UUID']>;
};

export type ResponseInsertResponse = {
  __typename?: 'responseInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Response>;
};

export type ResponseOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  feedback_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  student_id?: InputMaybe<OrderByDirection>;
};

export type ResponseUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_id?: InputMaybe<Scalars['BigInt']>;
  student_id?: InputMaybe<Scalars['UUID']>;
};

export type ResponseUpdateResponse = {
  __typename?: 'responseUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Response>;
};

export type Staff_Mapping = Node & {
  __typename?: 'staff_mapping';
  created_at?: Maybe<Scalars['Datetime']>;
  feedback?: Maybe<Feedback>;
  feedback_id: Scalars['BigInt'];
  id: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  responseCollection?: Maybe<ResponseConnection>;
  staff_id: Scalars['UUID'];
  staff_profile?: Maybe<Staff_Profile>;
  sub_id: Scalars['BigInt'];
  subject?: Maybe<Subject>;
};


export type Staff_MappingResponseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ResponseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ResponseOrderBy>>;
};

export type Staff_MappingConnection = {
  __typename?: 'staff_mappingConnection';
  edges: Array<Staff_MappingEdge>;
  pageInfo: PageInfo;
};

export type Staff_MappingDeleteResponse = {
  __typename?: 'staff_mappingDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Mapping>;
};

export type Staff_MappingEdge = {
  __typename?: 'staff_mappingEdge';
  cursor: Scalars['String'];
  node: Staff_Mapping;
};

export type Staff_MappingFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  feedback_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  staff_id?: InputMaybe<UuidFilter>;
  sub_id?: InputMaybe<BigIntFilter>;
};

export type Staff_MappingInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_id?: InputMaybe<Scalars['BigInt']>;
  staff_id?: InputMaybe<Scalars['UUID']>;
  sub_id?: InputMaybe<Scalars['BigInt']>;
};

export type Staff_MappingInsertResponse = {
  __typename?: 'staff_mappingInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Mapping>;
};

export type Staff_MappingOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  feedback_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  staff_id?: InputMaybe<OrderByDirection>;
  sub_id?: InputMaybe<OrderByDirection>;
};

export type Staff_MappingUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  feedback_id?: InputMaybe<Scalars['BigInt']>;
  staff_id?: InputMaybe<Scalars['UUID']>;
  sub_id?: InputMaybe<Scalars['BigInt']>;
};

export type Staff_MappingUpdateResponse = {
  __typename?: 'staff_mappingUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Mapping>;
};

export type Staff_Profile = Node & {
  __typename?: 'staff_profile';
  created_at?: Maybe<Scalars['Datetime']>;
  departments?: Maybe<Departments>;
  dept_id?: Maybe<Scalars['BigInt']>;
  designation?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  staff_mappingCollection?: Maybe<Staff_MappingConnection>;
  staff_no?: Maybe<Scalars['String']>;
};


export type Staff_ProfileStaff_MappingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Staff_MappingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Staff_MappingOrderBy>>;
};

export type Staff_ProfileConnection = {
  __typename?: 'staff_profileConnection';
  edges: Array<Staff_ProfileEdge>;
  pageInfo: PageInfo;
};

export type Staff_ProfileDeleteResponse = {
  __typename?: 'staff_profileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Profile>;
};

export type Staff_ProfileEdge = {
  __typename?: 'staff_profileEdge';
  cursor: Scalars['String'];
  node: Staff_Profile;
};

export type Staff_ProfileFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  dept_id?: InputMaybe<BigIntFilter>;
  designation?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  staff_no?: InputMaybe<StringFilter>;
};

export type Staff_ProfileInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
  designation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  staff_no?: InputMaybe<Scalars['String']>;
};

export type Staff_ProfileInsertResponse = {
  __typename?: 'staff_profileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Profile>;
};

export type Staff_ProfileOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  dept_id?: InputMaybe<OrderByDirection>;
  designation?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  staff_no?: InputMaybe<OrderByDirection>;
};

export type Staff_ProfileUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
  designation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  staff_no?: InputMaybe<Scalars['String']>;
};

export type Staff_ProfileUpdateResponse = {
  __typename?: 'staff_profileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Profile>;
};

export type Student_Profile = Node & {
  __typename?: 'student_profile';
  batch?: Maybe<Scalars['BigInt']>;
  departments?: Maybe<Departments>;
  dept_id?: Maybe<Scalars['BigInt']>;
  id: Scalars['UUID'];
  isNewUser: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  responseCollection?: Maybe<ResponseConnection>;
  roll_no?: Maybe<Scalars['BigInt']>;
  section?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Datetime']>;
};


export type Student_ProfileResponseCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ResponseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ResponseOrderBy>>;
};

export type Student_ProfileConnection = {
  __typename?: 'student_profileConnection';
  edges: Array<Student_ProfileEdge>;
  pageInfo: PageInfo;
};

export type Student_ProfileDeleteResponse = {
  __typename?: 'student_profileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Student_Profile>;
};

export type Student_ProfileEdge = {
  __typename?: 'student_profileEdge';
  cursor: Scalars['String'];
  node: Student_Profile;
};

export type Student_ProfileFilter = {
  batch?: InputMaybe<BigIntFilter>;
  dept_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<UuidFilter>;
  isNewUser?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  roll_no?: InputMaybe<BigIntFilter>;
  section?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Student_ProfileInsertInput = {
  batch?: InputMaybe<Scalars['BigInt']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
  id?: InputMaybe<Scalars['UUID']>;
  isNewUser?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  roll_no?: InputMaybe<Scalars['BigInt']>;
  section?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Student_ProfileInsertResponse = {
  __typename?: 'student_profileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Student_Profile>;
};

export type Student_ProfileOrderBy = {
  batch?: InputMaybe<OrderByDirection>;
  dept_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  isNewUser?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  roll_no?: InputMaybe<OrderByDirection>;
  section?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Student_ProfileUpdateInput = {
  batch?: InputMaybe<Scalars['BigInt']>;
  dept_id?: InputMaybe<Scalars['BigInt']>;
  id?: InputMaybe<Scalars['UUID']>;
  isNewUser?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  roll_no?: InputMaybe<Scalars['BigInt']>;
  section?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Student_ProfileUpdateResponse = {
  __typename?: 'student_profileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Student_Profile>;
};

export type Subject = Node & {
  __typename?: 'subject';
  category?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  created_at?: Maybe<Scalars['Datetime']>;
  dept_subjectCollection?: Maybe<Dept_SubjectConnection>;
  id: Scalars['BigInt'];
  is_theory: Scalars['Boolean'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  reg_id?: Maybe<Scalars['BigInt']>;
  regulations?: Maybe<Regulations>;
  short_name?: Maybe<Scalars['String']>;
  staff_mappingCollection?: Maybe<Staff_MappingConnection>;
};


export type SubjectDept_SubjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Dept_SubjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Dept_SubjectOrderBy>>;
};


export type SubjectStaff_MappingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Staff_MappingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Staff_MappingOrderBy>>;
};

export type SubjectConnection = {
  __typename?: 'subjectConnection';
  edges: Array<SubjectEdge>;
  pageInfo: PageInfo;
};

export type SubjectDeleteResponse = {
  __typename?: 'subjectDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Subject>;
};

export type SubjectEdge = {
  __typename?: 'subjectEdge';
  cursor: Scalars['String'];
  node: Subject;
};

export type SubjectFilter = {
  category?: InputMaybe<StringFilter>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  is_theory?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  reg_id?: InputMaybe<BigIntFilter>;
  short_name?: InputMaybe<StringFilter>;
};

export type SubjectInsertInput = {
  category?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  is_theory?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  reg_id?: InputMaybe<Scalars['BigInt']>;
  short_name?: InputMaybe<Scalars['String']>;
};

export type SubjectInsertResponse = {
  __typename?: 'subjectInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Subject>;
};

export type SubjectOrderBy = {
  category?: InputMaybe<OrderByDirection>;
  code?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_theory?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  reg_id?: InputMaybe<OrderByDirection>;
  short_name?: InputMaybe<OrderByDirection>;
};

export type SubjectUpdateInput = {
  category?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  is_theory?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  reg_id?: InputMaybe<Scalars['BigInt']>;
  short_name?: InputMaybe<Scalars['String']>;
};

export type SubjectUpdateResponse = {
  __typename?: 'subjectUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Subject>;
};

export type InsertIntoAlumniResponseMutationVariables = Exact<{
  alumni_name: Scalars['String'];
  batch: Scalars['String'];
  dept_id: Scalars['BigInt'];
}>;


export type InsertIntoAlumniResponseMutation = { __typename?: 'Mutation', insertIntoalumni_responseCollection?: { __typename?: 'alumni_responseInsertResponse', affectedCount: number, records: Array<{ __typename?: 'alumni_response', id: any, alumni_name?: string | null }> } | null };

export type InsertIntoAlumniAnswersMutationVariables = Exact<{
  objects: Array<Alumni_AnswersInsertInput> | Alumni_AnswersInsertInput;
}>;


export type InsertIntoAlumniAnswersMutation = { __typename?: 'Mutation', insertIntoalumni_answersCollection?: { __typename?: 'alumni_answersInsertResponse', affectedCount: number } | null };

export type InsertEmployerResponseMutationVariables = Exact<{
  company: Scalars['String'];
  employer_name: Scalars['String'];
}>;


export type InsertEmployerResponseMutation = { __typename?: 'Mutation', insertIntoemployer_responseCollection?: { __typename?: 'employer_responseInsertResponse', affectedCount: number, records: Array<{ __typename?: 'employer_response', company?: string | null, employer_name?: string | null, id: any }> } | null };

export type MyMutationMutationVariables = Exact<{
  objects: Array<Employer_AnswersInsertInput> | Employer_AnswersInsertInput;
}>;


export type MyMutationMutation = { __typename?: 'Mutation', insertIntoemployer_answersCollection?: { __typename?: 'employer_answersInsertResponse', affectedCount: number } | null };

export type InsertStudentResponseMutationVariables = Exact<{
  feedback_id: Scalars['BigInt'];
  student_id: Scalars['UUID'];
}>;


export type InsertStudentResponseMutation = { __typename?: 'Mutation', insertIntoresponseCollection?: { __typename?: 'responseInsertResponse', affectedCount: number, records: Array<{ __typename?: 'response', id: any }> } | null };

export type InsertStudentsAnswersMutationVariables = Exact<{
  objects: Array<AnswerInsertInput> | AnswerInsertInput;
}>;


export type InsertStudentsAnswersMutation = { __typename?: 'Mutation', insertIntoanswerCollection?: { __typename?: 'answerInsertResponse', affectedCount: number } | null };

export type AlumniFeedbackQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AlumniFeedbackQueryQuery = { __typename?: 'Query', questionCollection?: { __typename?: 'questionConnection', edges: Array<{ __typename?: 'questionEdge', node: { __typename?: 'question', question_no?: number | null, question?: string | null, no_of_options?: number | null, id: any, question_optionsCollection?: { __typename?: 'question_optionsConnection', edges: Array<{ __typename?: 'question_optionsEdge', node: { __typename?: 'question_options', option?: string | null, value?: number | null, id: any } }> } | null } }> } | null };

export type AlumniResponseResultQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']>;
}>;


export type AlumniResponseResultQueryQuery = { __typename?: 'Query', alumni_responseCollection?: { __typename?: 'alumni_responseConnection', edges: Array<{ __typename?: 'alumni_responseEdge', node: { __typename?: 'alumni_response', alumni_name?: string | null, batch?: string | null, created_at?: any | null, departments?: { __typename?: 'departments', short_name: string } | null, alumni_answersCollection?: { __typename?: 'alumni_answersConnection', edges: Array<{ __typename?: 'alumni_answersEdge', node: { __typename?: 'alumni_answers', answer?: number | null, question?: { __typename?: 'question', question?: string | null, question_no?: number | null, question_optionsCollection?: { __typename?: 'question_optionsConnection', edges: Array<{ __typename?: 'question_optionsEdge', node: { __typename?: 'question_options', option?: string | null, value?: number | null } }> } | null } | null } }> } | null } }> } | null };

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', departmentsCollection?: { __typename?: 'departmentsConnection', edges: Array<{ __typename?: 'departmentsEdge', node: { __typename?: 'departments', id: any, short_name: string } }> } | null };

export type DeptSubjectQueryQueryVariables = Exact<{
  dept: Scalars['BigInt'];
  reg: Scalars['BigInt'];
  sem: Scalars['BigInt'];
}>;


export type DeptSubjectQueryQuery = { __typename?: 'Query', dept_subjectCollection?: { __typename?: 'dept_subjectConnection', edges: Array<{ __typename?: 'dept_subjectEdge', node: { __typename?: 'dept_subject', id: any, sem: any, subject?: { __typename?: 'subject', is_theory: boolean, name: string, code: string, category?: string | null } | null, departments?: { __typename?: 'departments', short_name: string } | null } }> } | null };

export type EmployerFeedbackQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployerFeedbackQueryQuery = { __typename?: 'Query', questionCollection?: { __typename?: 'questionConnection', edges: Array<{ __typename?: 'questionEdge', node: { __typename?: 'question', id: any, question_no?: number | null, question?: string | null, no_of_options?: number | null } }> } | null };

export type EmployerResponseResultQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']>;
}>;


export type EmployerResponseResultQueryQuery = { __typename?: 'Query', employer_responseCollection?: { __typename?: 'employer_responseConnection', edges: Array<{ __typename?: 'employer_responseEdge', node: { __typename?: 'employer_response', employer_name?: string | null, company?: string | null, created_at?: any | null, employer_answersCollection?: { __typename?: 'employer_answersConnection', edges: Array<{ __typename?: 'employer_answersEdge', node: { __typename?: 'employer_answers', answer?: number | null, question?: { __typename?: 'question', question_no?: number | null, question?: string | null } | null } }> } | null } }> } | null };

export type GetStudFeedbackListQueryVariables = Exact<{
  batch: Scalars['Int'];
  dept: Scalars['BigInt'];
  section?: InputMaybe<Scalars['String']>;
  stud_id: Scalars['UUID'];
}>;


export type GetStudFeedbackListQuery = { __typename?: 'Query', feedbackCollection?: { __typename?: 'feedbackConnection', edges: Array<{ __typename?: 'feedbackEdge', node: { __typename?: 'feedback', id: any, sem: number, staff_mappingCollection?: { __typename?: 'staff_mappingConnection', edges: Array<{ __typename?: 'staff_mappingEdge', node: { __typename?: 'staff_mapping', id: any, subject?: { __typename?: 'subject', code: string, short_name?: string | null, name: string, id: any, is_theory: boolean } | null, responseCollection?: { __typename?: 'responseConnection', edges: Array<{ __typename?: 'responseEdge', node: { __typename?: 'response', id: any } }> } | null, staff_profile?: { __typename?: 'staff_profile', name?: string | null, departments?: { __typename?: 'departments', short_name: string, id: any } | null } | null } }> } | null } }> } | null };

export type GetFeedbackDataQueryVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type GetFeedbackDataQuery = { __typename?: 'Query', staff_mappingCollection?: { __typename?: 'staff_mappingConnection', edges: Array<{ __typename?: 'staff_mappingEdge', node: { __typename?: 'staff_mapping', staff_profile?: { __typename?: 'staff_profile', name?: string | null } | null, subject?: { __typename?: 'subject', name: string, code: string, short_name?: string | null } | null, feedback?: { __typename?: 'feedback', batch: number, section?: string | null, sem: number, departments?: { __typename?: 'departments', short_name: string } | null } | null } }> } | null };

export type RegsQueryVariables = Exact<{ [key: string]: never; }>;


export type RegsQuery = { __typename?: 'Query', regulationsCollection?: { __typename?: 'regulationsConnection', edges: Array<{ __typename?: 'regulationsEdge', node: { __typename?: 'regulations', reg: number, id: any, created_at: any } }> } | null };

export type StaffListQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StaffListQueryQuery = { __typename?: 'Query', staff_profileCollection?: { __typename?: 'staff_profileConnection', edges: Array<{ __typename?: 'staff_profileEdge', node: { __typename?: 'staff_profile', name?: string | null, staff_no?: string | null, designation?: string | null, id: any, departments?: { __typename?: 'departments', short_name: string } | null } }> } | null };

export type StudentFeedbackQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentFeedbackQueryQuery = { __typename?: 'Query', questionCollection?: { __typename?: 'questionConnection', edges: Array<{ __typename?: 'questionEdge', node: { __typename?: 'question', id: any, question_no?: number | null, question?: string | null, no_of_options?: number | null } }> } | null };


export const InsertIntoAlumniResponseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertIntoAlumniResponse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alumni_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"batch"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dept_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoalumni_responseCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"alumni_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alumni_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"batch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"batch"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dept_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dept_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alumni_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<InsertIntoAlumniResponseMutation, InsertIntoAlumniResponseMutationVariables>;
export const InsertIntoAlumniAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertIntoAlumniAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"alumni_answersInsertInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoalumni_answersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<InsertIntoAlumniAnswersMutation, InsertIntoAlumniAnswersMutationVariables>;
export const InsertEmployerResponseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertEmployerResponse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employer_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoemployer_responseCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"employer_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employer_name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"employer_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertEmployerResponseMutation, InsertEmployerResponseMutationVariables>;
export const MyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"employer_answersInsertInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoemployer_answersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<MyMutationMutation, MyMutationMutationVariables>;
export const InsertStudentResponseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertStudentResponse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"feedback_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"student_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoresponseCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"feedback_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"feedback_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"student_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"student_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertStudentResponseMutation, InsertStudentResponseMutationVariables>;
export const InsertStudentsAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertStudentsAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"answerInsertInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoanswerCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<InsertStudentsAnswersMutation, InsertStudentsAnswersMutationVariables>;
export const AlumniFeedbackQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AlumniFeedbackQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"feedback_type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"A","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_no"},"value":{"kind":"EnumValue","value":"AscNullsFirst"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_no"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"question_optionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"no_of_options"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AlumniFeedbackQueryQuery, AlumniFeedbackQueryQueryVariables>;
export const AlumniResponseResultQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AlumniResponseResultQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alumni_responseCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alumni_name"}},{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alumni_answersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"question_no"}},{"kind":"Field","name":{"kind":"Name","value":"question_optionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AlumniResponseResultQueryQuery, AlumniResponseResultQueryQueryVariables>;
export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departmentsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;
export const DeptSubjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deptSubjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sem"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dept_subjectCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"dept_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dept"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reg_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reg"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"sem"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sem"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_theory"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sem"}},{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeptSubjectQueryQuery, DeptSubjectQueryQueryVariables>;
export const EmployerFeedbackQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmployerFeedbackQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"feedback_type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"E","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_no"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question_no"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"no_of_options"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EmployerFeedbackQueryQuery, EmployerFeedbackQueryQueryVariables>;
export const EmployerResponseResultQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmployerResponseResultQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employer_responseCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employer_name"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"employer_answersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_no"}},{"kind":"Field","name":{"kind":"Name","value":"question"}}]}},{"kind":"Field","name":{"kind":"Name","value":"answer"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EmployerResponseResultQueryQuery, EmployerResponseResultQueryQueryVariables>;
export const GetStudFeedbackListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudFeedbackList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"batch"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stud_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedbackCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"batch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"batch"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"department_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dept"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"section"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff_mappingCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_theory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responseCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"student_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stud_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"staff_profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sem"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStudFeedbackListQuery, GetStudFeedbackListQueryVariables>;
export const GetFeedbackDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFeedbackData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff_mappingCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff_profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feedback"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"section"}},{"kind":"Field","name":{"kind":"Name","value":"sem"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFeedbackDataQuery, GetFeedbackDataQueryVariables>;
export const RegsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"regs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regulationsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reg"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RegsQuery, RegsQueryVariables>;
export const StaffListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"staffListQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff_profileCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"staff_no"}},{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"designation"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StaffListQueryQuery, StaffListQueryQueryVariables>;
export const StudentFeedbackQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StudentFeedbackQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"feedback_type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"E","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_no"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question_no"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"no_of_options"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StudentFeedbackQueryQuery, StudentFeedbackQueryQueryVariables>;