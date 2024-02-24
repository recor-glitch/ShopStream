import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs as authSchema } from "@/api/auth/application/schema";
import { resolvers as authResolver } from "@/api/auth/application/resolvers";

export const startApolloServer = async () => {
  const schemas = gql`
    ${authSchema}
  `;
  const resolvers = {
    ...authResolver,
  };
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    plugins: [],
  }) as any;
  await server.start();
};
