import authRouter from "@/api/auth/application/authController";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const router = express.Router();

router.use(helmet()).use(cors()).use(express.json());
router.use("/auth", authRouter);

export default router;
