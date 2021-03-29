import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ msg: "Express server running with Typescript" });
});

const port = 3333;
app.listen(port, () => {
  return console.log(`Server running at port ${port}`);
});
