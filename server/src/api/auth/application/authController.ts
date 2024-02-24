import express from "express";
import { IUserDto } from "../domain/userDto";
import { createUser } from "../domain/userService";

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  const userDto: IUserDto = req.body;
  try {
    const user = await createUser(userDto);
    console.log({ user });
    if (user) {
      res.status(201).send(user);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

authRouter.post("/login", (req, res) => {});

export default authRouter;
