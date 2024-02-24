"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const userRepository_1 = require("./userRepository");
const createUser = async (userDto) => {
    return await (0, userRepository_1.createUserRespository)().createUser(userDto);
};
exports.createUser = createUser;
