import express, { Application, Request, Response, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "@routes/routes";

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3000;
app.get("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
