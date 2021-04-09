import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import multer from "multer";
import { importCategoriesController } from "../modules/cars/useCases/importCategories";

const upload = multer({ dest: "./tmp" });

const categoriesRouter = Router();

categoriesRouter
  .route("/")
  .post((req, res) => createCategoryController.handle(req, res))
  .get((req, res) => listCategoriesController.handle(req, res));

categoriesRouter
  .route("/import")
  .post(upload.single("file"), (req, res) => importCategoriesController.handle(req, res));

export { categoriesRouter };
