import { IUserDto } from "./userDto";
import { IUser } from "./user";
import {
  createUser,
  getAllUsers,
  getUserById,
  getUsersByQuery,
} from "../infrastructure/userRepositoryPrisma";

export interface IUserRepository {
  createUser(user: IUserDto): Promise<IUser>;
  findUserById(id: number): Promise<IUser>;
  findUsersByQuery(query: string): Promise<IUser[]>;
  getAllUsers(): Promise<IUser[]>;
}

export const createUserRespository = (): IUserRepository => {
  return {
    createUser: async (user: IUserDto): Promise<IUser> =>
      await createUser(user),
    findUsersByQuery: async (query: string): Promise<IUser[]> =>
      await getUsersByQuery({ query }),
    findUserById: async (id: number): Promise<IUser> =>
      await getUserById({ id }),
    getAllUsers: async (): Promise<IUser[]> => await getAllUsers(),
  };
};
