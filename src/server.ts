import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import { initializeDatabaseConnection } from "./database";
import { AppError } from "./errors/AppError";

initializeDatabaseConnection()
  .then((connection) => {
    console.log(connection.options);
    initializeExpressServer();
  })
  .catch((error) => console.log({ error }));

const initializeExpressServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.text());
  app.use(express.urlencoded({ extended: true }));

  app.use(router);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      const error = err as AppError;
      return res.status(error.statusCode).json({ message: err.message });
    }
  });

  const port = 3333;

  app.listen(port, () => {
    return console.log(`Server running at port ${port}`);
  });
};
