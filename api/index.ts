// @ts-ignore
import express, { Request, Response } from "express";
import cors from "cors";
import data from "../data/data.json";

const app = express();
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(data);
});

export default app;