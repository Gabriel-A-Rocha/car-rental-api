import { Request, Response } from "express";
import { ImportCategoriesService } from "./ImportCategoriesService";

class ImportCategoriesController {
  importCategoriesService: ImportCategoriesService;

  constructor(importCategoriesService: ImportCategoriesService) {
    this.importCategoriesService = importCategoriesService;
  }

  handle(req: Request, res: Response) {
    const { file } = req;

    const importedCategories = this.importCategoriesService.execute(file);

    return res.status(201).json(importedCategories);
  }
}

export { ImportCategoriesController };
