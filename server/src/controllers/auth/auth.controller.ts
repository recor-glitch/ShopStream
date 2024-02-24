import { ILoginRequestBody } from "@models/auth.models";
import express, { Request, Response, NextFunction } from "express";
import { BODY_NOT_DEFINED } from "../../constants";
import { PrismaClient } from "@prisma/client";

const loginRouter = express.Router();
const prisma = new PrismaClient();

loginRouter.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  return res.json({ users });
});

loginRouter.post(
  "/",
  (
    req: Request<{}, {}, ILoginRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username, password } = req.body;
    } catch (err) {
      return res.status(500).json({ message: BODY_NOT_DEFINED });
    }
  }
);

export default loginRouter;
