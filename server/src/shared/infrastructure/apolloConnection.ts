import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs as authSchema } from "@/api/auth/application/schema";
import { resolvers as authResolver } from "@/api/auth/application/resolvers";
import { Application } from "express";
import { authenticateToken } from "./middleware";

export const startApolloServer = async (app: Application) => {
  const schemas = gql`
    ${authSchema}
  `;
  const resolvers = {
    ...authResolver,
  };

  app.use("/graphql", (req, res, next) => {
    if (req.body.operationName !== "CreateUser2") {
      app.use(authenticateToken);
    }
    next();
  });

  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    plugins: [],
  });
  try {
    await server.start();
    server.applyMiddleware({ app: app as any });
  } catch (err) {
    console.log("Error starting Apollo server: ", err);
  }
};
