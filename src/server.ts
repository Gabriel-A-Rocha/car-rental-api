import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import { initializeDatabaseConnection } from "./database";

initializeDatabaseConnection()
  .then(() => {
    console.log("Database connection successful");
    initializeExpressServer();
  })
  .catch((error) =>
    console.log({
      msg: "Database connection failed",
      error,
    })
  );

const initializeExpressServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.text());
  app.use(express.urlencoded({ extended: true }));

  app.use(router);

  const port = 3333;

  app.listen(port, () => {
    return console.log(`Server running at port ${port}`);
  });
};
