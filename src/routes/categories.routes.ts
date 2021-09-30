import { Router } from "express";
import multer from "multer";
import { uploadConfig } from "../config/upload";
import {
  CreateCategoryController,
  ImportCategoriesController,
  ListCategoriesController,
} from "../modules/cars/useCases";

const uploadCategories = multer(uploadConfig("./tmp"));

export const categoriesRouter = Router();

categoriesRouter
  .route("/categories")
  .post(new CreateCategoryController().handle)
  .get(new ListCategoriesController().handle);

categoriesRouter
  .route("/categories/import")
  .post(uploadCategories.single("categories"), new ImportCategoriesController().handle);
