import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes
  .route("/categories")

  .get((req, res) => {
    return res.status(200).json({ msg: "GET /categories" });
  })

  .post((req, res) => {
    const { name, description } = req.body;

    const newCategory = {
      id: uuidV4(),
      name,
      description,
    };

    categories.push(newCategory);

    return res.status(201).json(newCategory);
  });

export { categoriesRoutes };
