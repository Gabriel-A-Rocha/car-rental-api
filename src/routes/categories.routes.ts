import { Router } from "express";
import { createCategoryController, listCategoriesController } from "../modules/cars/useCases";

const categoriesRouter = Router();

categoriesRouter
  .route("/")

  .post((req, res) => createCategoryController.handle(req, res))

  .get((req, res) => listCategoriesController.handle(req, res));

export { categoriesRouter };
