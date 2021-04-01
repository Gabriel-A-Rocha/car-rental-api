import { Router } from "express";
import { VolatileCategoriesRepository } from "../modules/cars/repositories/VolatileCategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new VolatileCategoriesRepository();

categoriesRoutes
  .route("/")

  .post((req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    try {
      const category = createCategoryService.execute(name, description);

      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error });
    }
  })

  .get((req, res) => {
    const categories = categoriesRepository.list();

    return res.status(200).json(categories);
  });

export { categoriesRoutes };
