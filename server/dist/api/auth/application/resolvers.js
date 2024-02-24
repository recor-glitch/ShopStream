"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const userRepository_1 = require("../domain/userRepository");
const userRepository = (0, userRepository_1.createUserRespository)();
exports.resolvers = {
    Query: {
        getUser: async (_, { id }) => userRepository.findUserById(id),
        getAllUsers: async () => userRepository.getAllUsers(),
    },
    Mutation: {
        createUser: async (_, userDto) => {
            return userRepository.createUser(userDto);
        },
    },
};
