import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { userRoute } from "./routes/userRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import { dbConnect } from "./config/dbConnect";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 5000;

dbConnect();
app.use(express.json());
app.use("/api/auth", userRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
