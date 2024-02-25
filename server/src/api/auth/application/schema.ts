import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    findUsersByQuery(query: String!): [User]
  }

  type Mutation {
    createUser(name: String!, password: String!, email: String!): User
  }
`;
