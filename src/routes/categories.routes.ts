import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import multer from "multer";

const upload = multer({ dest: "./tmp" });

const categoriesRouter = Router();

categoriesRouter
  .route("/")

  .post((req, res) => createCategoryController.handle(req, res))

  .get((req, res) => listCategoriesController.handle(req, res));

categoriesRouter
  .route("/import")

  .post(upload.single("file"), (req, res) => {
    console.log(req.file);

    return res.status(201).json({ msg: "Upload successful" });
  });

export { categoriesRouter };
