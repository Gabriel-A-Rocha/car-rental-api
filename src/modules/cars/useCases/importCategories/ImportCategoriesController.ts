import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoriesService } from "./ImportCategoriesService";

export class ImportCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const { file } = req;

      const importCategoriesService = container.resolve(ImportCategoriesService);
      await importCategoriesService.execute(file);

      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
