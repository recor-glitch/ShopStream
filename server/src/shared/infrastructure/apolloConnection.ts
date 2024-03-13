import { typeDefs as authSchema } from "@/api/auth/application/schema";
import { resolvers as authResolver } from "@/api/auth/application/resolvers";
import { Application } from "express";
import { authenticateToken } from "./middleware";
import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";

export const startApolloServer = async (app: Application) => {
  const schemas = gql`
    ${authSchema}
  `;
  const resolvers = {
    ...authResolver,
  };

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  try {
    await server.start();
    app.use("/graphql", authenticateToken, expressMiddleware(server));
  } catch (err) {
    console.log("Error starting Apollo server: ", err);
  }
};
