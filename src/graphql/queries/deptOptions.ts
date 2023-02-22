import { graphql } from "@/gql";

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

export { deptOptionsQuery };
