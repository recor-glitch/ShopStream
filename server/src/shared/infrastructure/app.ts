import dotenv from "dotenv";
import express, { Application } from "express";
import router from "./router";
import { startApolloServer } from "./apolloConnection";

const app: Application = express();
dotenv.config();

const port = process.env.PORT || 3000;
app.use(router);

startApolloServer();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
