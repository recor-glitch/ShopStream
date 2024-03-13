import { ILoginDto, IUserDto } from "./userDto";
import { IUser, IauthenticatedUserResponse } from "./user";
import {
  authenticateUser,
  createUser,
  getAllUsers,
  getUserById,
  getUsersByQuery,
} from "../infrastructure/userRepositoryPrisma";

export interface IUserRepository {
  createUser(user: IUserDto): Promise<IauthenticatedUserResponse>;
  loginUser(info: ILoginDto): Promise<IauthenticatedUserResponse>;
  findUserById(id: number): Promise<IUser>;
  findUsersByQuery(query: string): Promise<IUser[]>;
  getAllUsers(): Promise<IUser[]>;
}

export const createUserRespository = (): IUserRepository => {
  return {
    createUser: async (user: IUserDto): Promise<IauthenticatedUserResponse> =>
      await createUser(user),
    loginUser: async (user: ILoginDto): Promise<IauthenticatedUserResponse> =>
      await authenticateUser({ name: user.name, password: user.password }),
    findUsersByQuery: async (query: string): Promise<IUser[]> =>
      await getUsersByQuery({ query }),
    findUserById: async (id: number): Promise<IUser> =>
      await getUserById({ id }),
    getAllUsers: async (): Promise<IUser[]> => await getAllUsers(),
  };
};
