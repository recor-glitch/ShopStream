import express, { Request, Response } from "express";
import authRouter from "./auth/auth.router";

const router = express.Router();

router.use("/auth", authRouter);

export default router;
