import { IUser } from "./user";
import { IUserDto } from "./userDto";
import { createUserRespository } from "./userRepository";

const createUser = (userDto: IUserDto): IUser => {
  const user = createUserRespository();
};
