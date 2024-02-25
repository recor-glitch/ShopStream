import dotenv from "dotenv";
import express, { Application } from "express";
import { startApolloServer } from "./apolloConnection";
import cors from "cors";
import helmet from "helmet";

const app: Application = express();
dotenv.config();

const port = process.env.PORT || 3000;
app.use(helmet()).use(cors()).use(express.json());

startApolloServer(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
