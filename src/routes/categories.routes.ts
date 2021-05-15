import { Router } from "express";

import multer from "multer";
import { instantiateCreateCategoryController } from "../modules/cars/useCases/createCategory";
import { instantiateImportCategoriesController } from "../modules/cars/useCases/importCategories";
import { instantiateListCategoryController } from "../modules/cars/useCases/listCategories";

const upload = multer({ dest: "./tmp" });

const categoriesRouter = Router();

categoriesRouter
  .route("/")
  .post((req, res) => {
    const createCategoryController = instantiateCreateCategoryController();
    return createCategoryController.handle(req, res);
  })
  .get((req, res) => {
    const listCategoriesController = instantiateListCategoryController();
    return listCategoriesController.handle(req, res);
  });

categoriesRouter.route("/import").post(upload.single("file"), (req, res) => {
  const importCategoriesController = instantiateImportCategoriesController();
  importCategoriesController.handle(req, res);
});

export { categoriesRouter };
