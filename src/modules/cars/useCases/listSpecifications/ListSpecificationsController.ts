import { Request, Response } from "express";
import { container } from "tsyringe";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class ListSpecificationsController {
  async handle(req: Request, res: Response) {
    try {
      const specificationsRepository = container.resolve(SpecificationsRepository);
      const records = await specificationsRepository.list();

      return res.status(200).json(records);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
