"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApolloServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("@/api/auth/application/schema");
const resolvers_1 = require("@/api/auth/application/resolvers");
const startApolloServer = async () => {
    const schemas = (0, apollo_server_express_1.gql) `
    ${schema_1.typeDefs}
  `;
    const resolvers = {
        ...resolvers_1.resolvers,
    };
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schemas,
        resolvers,
        plugins: [],
    });
    await server.start();
};
exports.startApolloServer = startApolloServer;
