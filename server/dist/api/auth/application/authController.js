"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = require("../domain/userService");
const authRouter = express_1.default.Router();
authRouter.post("/signup", (req, res) => {
    const userDto = req.body;
    try {
        const user = (0, userService_1.createUser)(userDto);
        if (user) {
            res.status(201).send(user);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.default = authRouter;
