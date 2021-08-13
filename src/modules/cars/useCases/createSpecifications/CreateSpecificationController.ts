import { NextFunction, Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { CreateSpecificationService } from "./CreateSpecificationService";

@injectable()
export class CreateSpecificationController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description } = req.body;

      const createSpecificationService = container.resolve(CreateSpecificationService);
      await createSpecificationService.execute(name, description);

      return res.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}
