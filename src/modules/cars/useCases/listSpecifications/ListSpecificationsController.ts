import { Request, Response } from "express";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class ListSpecificationsController {
  private specificationsRepository;

  constructor() {
    this.specificationsRepository = new SpecificationsRepository();
  }

  async handle(req: Request, res: Response) {
    const records = await this.specificationsRepository.list();
    return res.status(200).json(records);
  }
}
