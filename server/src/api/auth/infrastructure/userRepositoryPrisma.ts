import { PrismaClient } from "@prisma/client";
import { IUser } from "../domain/user";
import { IUserDto } from "../domain/userDto";
import { comparePasswords, generateToken, hashPassword } from "./authService";

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
    console.log({ id });
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
