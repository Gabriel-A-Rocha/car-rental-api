import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationService } from "./CreateSpecificationService";

export class CreateSpecificationController {
  async handle(req: Request, res: Response) {
    try {
      const { name, description } = req.body;

      const createSpecificationService = container.resolve(CreateSpecificationService);
      await createSpecificationService.execute(name, description);

      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
