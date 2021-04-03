import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

categoriesRouter
  .route("/")

  .post((req, res) => createCategoryController.handle(req, res))

  .get((req, res) => listCategoriesController.handle(req, res));

export { categoriesRouter };
