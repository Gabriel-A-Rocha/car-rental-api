import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
  private createCategoryService: CreateCategoryService;

  constructor(createCategoryService: CreateCategoryService) {
    this.createCategoryService = createCategoryService;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body;

      await this.createCategoryService.execute(name, description);

      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
