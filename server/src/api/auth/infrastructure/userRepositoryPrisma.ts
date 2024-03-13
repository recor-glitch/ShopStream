import { PrismaClient } from "@prisma/client";
import { IUser, IcreateUserResponse } from "../domain/user";
import { IUserDto } from "../domain/userDto";
import { comparePasswords, generateToken, hashPassword } from "./authService";
import { createSigner } from "fast-jwt";

const prisma = new PrismaClient();

export async function authenticateUser(
  name: string,
  password: string
): Promise<string> {
  const user = await prisma.user.findFirst({ where: { name } });

  if (!user) {
    throw new Error("No user found");
  }

  const passwordMatch = await comparePasswords(password, user.password);

  if (passwordMatch) {
    return generateToken({
      id: user.id,
      name: user.name ?? "",
      email: user.email,
    });
  } else {
    throw new Error("Passwords do not match");
  }
}

export async function createUser({
  name,
  password,
  email,
}: IUserDto): Promise<IcreateUserResponse> {
  try {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const signSync = createSigner({ key: process.env.JWT_SECRET });
    const token = signSync({ name: user.name, email: user.email, id: user.id });
    console.log({ token });
    return { token, success: true };
  } catch (err) {
    throw err;
  }
}

export async function getAllUsers(): Promise<IUser[]> {
  try {
    const users = (await prisma.user.findMany({
      select: { name: true, email: true, id: true },
    })) as IUser[];

    return users.map((user) => ({
      name: user.name ?? "",
      email: user.email,
      id: user.id,
    }));
  } catch (err) {
    throw err;
  }
}

export async function getUserById({ id }: { id: number }): Promise<IUser> {
  try {
    return (await prisma.user.findFirst({
      where: { id },
    })) as IUser;
  } catch (err) {
    throw err;
  }
}

export async function getUsersByQuery({
  query,
}: {
  query: string;
}): Promise<IUser[]> {
  try {
    const users = (await prisma.user.findMany({
      select: { name: true, email: true, id: true },
    })) as IUser[];
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) || user.email.includes(query)
    );
  } catch (err) {
    throw err;
  }
}
