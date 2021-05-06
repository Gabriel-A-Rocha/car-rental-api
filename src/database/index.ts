import { createConnection } from "typeorm";
import { Category } from "../modules/cars/models/Category";
import { Specification } from "../modules/cars/models/Specification";

createConnection()
  .then((connection) => {
    console.log("Database connection initiated");
  })
  .catch((error) => console.log(error));
