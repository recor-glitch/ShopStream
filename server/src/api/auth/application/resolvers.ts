import { IUserDto } from "../domain/userDto";
import { createUserRespository } from "../domain/userRepository";

const userRepository = createUserRespository();

export const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) =>
      userRepository.findUserById(id),
    getAllUsers: async () => userRepository.getAllUsers(),
  },
  Mutation: {
    createUser: async (_: any, userDto: IUserDto) => {
      return userRepository.createUser(userDto);
    },
  },
};
