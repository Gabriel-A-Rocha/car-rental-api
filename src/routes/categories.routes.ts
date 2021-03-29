import { Router } from "express";
import { CategoriesRepository } from "../repositories/categoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes
  .route("/")

  .get((req, res) => {
    return res.status(200).json({ msg: "GET /categories" });
  })

  .post((req, res) => {
    const { name, description } = req.body;

    const newCategory = categoriesRepository.create(name, description);

    return res.status(201).json(newCategory);
  });

export { categoriesRoutes };
