import bcrypt from "bcrypt";
import { createSigner, createVerifier } from "fast-jwt";
import { OAuth2Client } from "google-auth-library";

const secret = process.env.JWT_SECRET;
const signer = createSigner({ key: secret });
const verifier = createVerifier({ key: secret });

export function generateToken(payload: { [key: string]: any }): string {
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

export async function getAuthenticatedClient(): Promise<void> {
  const oAuth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
  });

  const authorizedToken = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
  });

  
}
