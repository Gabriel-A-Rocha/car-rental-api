import { Request, Response } from "express";
import { ListCategoriesService } from "./ListCategoriesService";

class ListCategoriesController {
  listCategoriesService: ListCategoriesService;

  constructor(listCategoriesService: ListCategoriesService) {
    this.listCategoriesService = listCategoriesService;
  }

  handle(req: Request, res: Response) {
    try {
      const categories = this.listCategoriesService.handle();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { ListCategoriesController };
