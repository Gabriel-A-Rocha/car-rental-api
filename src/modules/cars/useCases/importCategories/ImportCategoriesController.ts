import { Request, Response } from "express";
import { ImportCategoriesService } from "./ImportCategoriesService";

class ImportCategoriesController {
  importCategoriesService: ImportCategoriesService;

  constructor(importCategoriesService: ImportCategoriesService) {
    this.importCategoriesService = importCategoriesService;
  }

  async handle(req: Request, res: Response) {
    try {
      const { file } = req;

      const importedCategories = await this.importCategoriesService.execute(file);

      return res.status(201).json(importedCategories);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { ImportCategoriesController };
