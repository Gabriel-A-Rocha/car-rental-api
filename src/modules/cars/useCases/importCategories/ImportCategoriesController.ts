import { Request, Response } from "express";
import { ImportCategoriesService } from "./ImportCategoriesService";

export class ImportCategoriesController {
  constructor(private importCategoriesService: ImportCategoriesService) {
    this.importCategoriesService = importCategoriesService;
  }

  async handle(req: Request, res: Response) {
    try {
      const { file } = req;
      await this.importCategoriesService.execute(file);

      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
