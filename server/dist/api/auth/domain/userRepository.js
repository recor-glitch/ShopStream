"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRespository = void 0;
const userRepositoryPrisma_1 = require("../infrastructure/userRepositoryPrisma");
const dummyUser = {
    email: "example@gmail.com",
    id: 1,
    name: "Rahul Chaudhury",
};
const createUserRespository = () => {
    return {
        createUser: async (user) => await (0, userRepositoryPrisma_1.createUser)(user),
        findUserByName: (name) => dummyUser,
        findUserById: (id) => dummyUser,
        getAllUsers: () => [...new Array(5).fill(dummyUser)],
    };
};
exports.createUserRespository = createUserRespository;
