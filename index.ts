import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({ msg: "hello world with TypeScript" });
});

app.listen(3333);
