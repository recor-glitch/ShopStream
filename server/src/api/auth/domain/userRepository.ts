import { IUserDto } from "./userDto";
import { IUser } from "./user";

export interface IUserRepository {
  createUser(user: IUserDto): IUser;
  findUserById(id: string): IUser;
  findUseerByName(name: string): IUser;
  getAllUsers(): IUser[];
}

const dummyUser = {
  email: "example@gmail.com",
  id: "1",
  name: "Rahul Chaudhury",
};

export const createUserRespository = (): IUserRepository => {
  return {
    createUser: (user: IUserDto): IUser => dummyUser,
    findUseerByName: (name: string): IUser => dummyUser,
    findUserById: (id: string): IUser => dummyUser,
    getAllUsers: (): IUser[] => [...new Array(5).fill(dummyUser)],
  };
};
