import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type AuthResponse {
    token: String!
    success: Boolean!
  }

  type Query {
    getUser(id: Int!): User
    getAllUsers: [User]
    findUsersByQuery(query: String!): [User]
  }

  type Mutation {
    createUser(name: String!, password: String!, email: String!): AuthResponse
    loginUser(name: String, password: String!, email: String): AuthResponse
  }
`;
