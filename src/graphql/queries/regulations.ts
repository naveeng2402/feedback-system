import { graphql } from "@/gql";

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

export { regs };
