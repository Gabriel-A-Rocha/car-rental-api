import { Request, Response } from "express";
import { ListCategoriesService } from "./ListCategoriesService";

export class ListCategoriesController {
  private listCategoriesService: ListCategoriesService;

  constructor(listCategoriesService: ListCategoriesService) {
    this.listCategoriesService = listCategoriesService;
  }
  async handle(req: Request, res: Response) {
    try {
      const categories = await this.listCategoriesService.execute();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
