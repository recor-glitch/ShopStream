import { PrismaClient } from "@prisma/client";
import { generateToken, comparePasswords, hashPassword } from "./authService";
import { IUserDto } from "../domain/userDto";
import { IUser } from "../domain/user";
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

export async function authenticateUser(
  name: string,
  password: string
): Promise<string | null> {
  const user = await prisma.user.findFirst({ where: { name } });

  if (!user) {
    return null; // User not found
  }

  const passwordMatch = await comparePasswords(password, user.password);

  if (passwordMatch) {
    return generateToken({
      id: user.id,
      name: user.name ?? "",
      email: user.email,
    });
  }

  return null; // Incorrect password
}

export async function createUser({
  name,
  password,
  email,
}: IUserDto): Promise<IUser> {
  try {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    return { name: user.name, email: user.email, id: user.id } as IUser;
  } catch (err) {
    // if (err instanceof PrismaClientKnownRequestError) {
    //   if (err.code === "P2002") throw new Error("Email already exists");
    // }
    // if (err instanceof PrismaClientUnknownRequestError)
    //   throw new Error(err.message);
    throw err;
  }
}
