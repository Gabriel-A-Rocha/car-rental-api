import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesService } from "./ListCategoriesService";

export class ListCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const listCategoriesService = container.resolve(ListCategoriesService);

      const categories = await listCategoriesService.execute();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
