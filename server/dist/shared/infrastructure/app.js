"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const apolloConnection_1 = require("./apolloConnection");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app.use(router_1.default);
(0, apolloConnection_1.startApolloServer)();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
