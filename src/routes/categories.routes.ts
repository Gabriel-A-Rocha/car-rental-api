import { Router } from "express";

import multer from "multer";
import { instantiateCreateCategoryController } from "../modules/cars/useCases/createCategory";
import { instantiateImportCategoriesController } from "../modules/cars/useCases/importCategories";

const upload = multer({ dest: "./tmp" });

const categoriesRouter = Router();

categoriesRouter.route("/").post((req, res) => {
  const createCategoryController = instantiateCreateCategoryController();
  createCategoryController.handle(req, res);
});
//.get((req, res) => listCategoriesController.handle(req, res));

categoriesRouter.route("/import").post(upload.single("file"), (req, res) => {
  const importCategoriesController = instantiateImportCategoriesController();
  importCategoriesController.handle(req, res);
});

export { categoriesRouter };
