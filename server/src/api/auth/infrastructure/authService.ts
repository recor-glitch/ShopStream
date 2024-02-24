import { createSigner, createVerifier } from "fast-jwt";
import bcrypt from "bcrypt";
import { IUser } from "../domain/user";

const secret = process.env.JWT_SECRET || "your-secret-key";
const signer = createSigner({ key: secret });
const verifier = createVerifier({ key: secret });

export function generateToken(payload: IUser): string {
  return signer({ exp: Math.floor(Date.now() / 1000) + 60 * 60, ...payload });
}

export function verifyToken(token: string): object | string {
  try {
    return verifier(token);
  } catch (error) {
    return "Invalid token";
  }
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(
  inputPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(inputPassword, hashedPassword);
}
