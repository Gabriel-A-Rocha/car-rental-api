import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
  createCategoryService: CreateCategoryService;

  constructor(createCategoryService: CreateCategoryService) {
    this.createCategoryService = createCategoryService;
  }

  handle(req: Request, res: Response) {
    try {
      const { name, description } = req.body;

      const category = this.createCategoryService.execute(name, description);

      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { CreateCategoryController };
