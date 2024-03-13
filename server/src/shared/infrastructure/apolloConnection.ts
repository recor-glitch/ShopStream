import { resolvers as authResolver } from "@/api/auth/application/resolvers";
import { typeDefs as authSchema } from "@/api/auth/application/schema";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { Application } from "express";
import gql from "graphql-tag";
import { authenticateToken } from "./middleware";

export const startApolloServer = async (app: Application) => {
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
  });

  try {
    await server.start();
    // Need to remove the authenticationToken from the middleware to run the postman introspection
    app.use("/graphql", authenticateToken, expressMiddleware(server));
  } catch (err) {
    console.log("Error starting Apollo server: ", err);
  }
};
