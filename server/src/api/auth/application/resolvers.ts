import { IUser, IauthenticatedUserResponse } from "../domain/user";
import { ILoginDto, IUserDto } from "../domain/userDto";
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
    ): Promise<IauthenticatedUserResponse> => {
      return await userRepository.createUser(userDto);
    },
    loginUser: async (
      _: any,
      loginDto: ILoginDto
    ): Promise<IauthenticatedUserResponse> => {
      return await userRepository.loginUser(loginDto);
    },
  },
};
