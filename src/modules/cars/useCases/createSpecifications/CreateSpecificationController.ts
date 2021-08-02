import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { CreateSpecificationService } from "./CreateSpecificationService";

@injectable()
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
