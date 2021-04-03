import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRouter = Router();

categoriesRouter
  .route("/")

  .post((req, res) => createCategoryController.handle(req, res));

//.get((req, res) => categoryController.list(req, res));

export { categoriesRouter };
