import { Router } from "express";
import multer from "multer";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import {
  CreateCategoryController,
  ImportCategoriesController,
  ListCategoriesController,
} from "../modules/cars/useCases";

const upload = multer({ dest: "./tmp" });

export const categoriesRouter = Router();

categoriesRouter
  .route("/categories")
  .post(new CreateCategoryController().handle)
  .get(new ListCategoriesController().handle);

categoriesRouter
  .route("/categories/import")
  .post(upload.single("file"), new ImportCategoriesController().handle);
