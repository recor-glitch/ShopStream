import { IUser, IcreateUserResponse } from "../domain/user";
import { IUserDto } from "../domain/userDto";
import { createUserRespository } from "../domain/userRepository";

const userRepository = createUserRespository();

export const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: number }) => {
      return userRepository.findUserById(id);
    },
    getAllUsers: async () => userRepository.getAllUsers(),
    findUsersByQuery: async (query: string) =>
      userRepository.findUsersByQuery(query),
  },
  Mutation: {
    createUser: async (
      _: any,
      userDto: IUserDto
    ): Promise<IcreateUserResponse> => {
      return await userRepository.createUser(userDto);
    },
  },
};
