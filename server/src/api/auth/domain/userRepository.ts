import { IUserDto } from "./userDto";
import { IUser } from "./user";
import { createUser } from "../infrastructure/userRepositoryPrisma";

export interface IUserRepository {
  createUser(user: IUserDto): Promise<IUser>;
  findUserById(id: string): IUser;
  findUserByName(name: string): IUser;
  getAllUsers(): IUser[];
}

const dummyUser = {
  email: "example@gmail.com",
  id: 1,
  name: "Rahul Chaudhury",
};

export const createUserRespository = (): IUserRepository => {
  return {
    createUser: async (user: IUserDto): Promise<IUser> =>
      await createUser(user),
    findUserByName: (name: string): IUser => dummyUser,
    findUserById: (id: string): IUser => dummyUser,
    getAllUsers: (): IUser[] => [...new Array(5).fill(dummyUser)],
  };
};
