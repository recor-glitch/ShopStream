import { Request, Response, NextFunction } from "express";
import { CustomUserRequest } from "@/shared/domain/custom";
import { verifyToken } from "@/api/auth/infrastructure/authService";

export function authenticateToken(
  req: CustomUserRequest,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | void {
  if (req.body.operationName === "CreateUser") {
    next();
  }
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Token missing" });
  }

  const decoded = verifyToken(token.split(" ")[1]);

  if (typeof decoded === "string") {
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }

  // Attach user information to the request for later use in route handlers
  req.user = decoded;

  next();
}
