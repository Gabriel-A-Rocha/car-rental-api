import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories: Array<Category> = [];

categoriesRoutes
  .route("/")

  .get((req, res) => {
    return res.status(200).json({ msg: "GET /categories" });
  })

  .post((req, res) => {
    const { name, description } = req.body;

    const category = new Category(name, description);

    categories.push(category);

    return res.status(201).json(category);
  });

export { categoriesRoutes };
