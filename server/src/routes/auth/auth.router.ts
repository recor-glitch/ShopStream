import loginRouter from "@controllers/auth/auth.controller";
import express from "express";

const authRouter = express.Router();

authRouter.use("/login", loginRouter);

export default authRouter;
