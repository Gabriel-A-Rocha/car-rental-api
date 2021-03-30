import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes
  .route("/")

  .get((req, res) => {
    return res.status(200).json(categoriesRepository.list());
  })

  .post((req, res) => {
    const { name, description } = req.body;

    const newCategory = categoriesRepository.create(name, description);

    return res.status(201).json(newCategory);
  });

export { categoriesRoutes };
