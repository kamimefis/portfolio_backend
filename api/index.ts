import express, { Request, Response } from "express";
import data from "../data/data.json";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(data);
});

export default app;