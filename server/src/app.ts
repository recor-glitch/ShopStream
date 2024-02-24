import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "@routes/routes";

const app: Application = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3000;
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
