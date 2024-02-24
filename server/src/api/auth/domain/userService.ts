import { IUser } from "./user";
import { IUserDto } from "./userDto";
import { createUserRespository } from "./userRepository";

export const createUser = async (userDto: IUserDto): Promise<IUser> => {
  return await createUserRespository().createUser(userDto);
};
