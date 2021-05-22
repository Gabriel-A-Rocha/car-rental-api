import { Router } from "express";
import multer from "multer";
import {
  instantiateCreateCategoryController,
  instantiateImportCategoriesController,
  instantiateListCategoryController,
} from "../modules/cars/useCases";

const upload = multer({ dest: "./tmp" });

export const categoriesRouter = Router();

categoriesRouter
  .route("/categories")
  .post((req, res) => instantiateCreateCategoryController().handle(req, res))
  .get((req, res) => instantiateListCategoryController().handle(req, res));

categoriesRouter
  .route("/categories/import")
  .post(upload.single("file"), (req, res) =>
    instantiateImportCategoriesController().handle(req, res)
  );
