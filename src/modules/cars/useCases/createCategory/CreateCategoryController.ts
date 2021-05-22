import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body;

      const createCategoryService = container.resolve(CreateCategoryService);
      await createCategoryService.execute(name, description);

      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
