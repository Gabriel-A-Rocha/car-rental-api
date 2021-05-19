import { Request, Response } from "express";
import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
  private createSpecificationService: CreateSpecificationService;

  constructor(createSpecificationService: CreateSpecificationService) {
    this.createSpecificationService = createSpecificationService;
  }
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      await this.createSpecificationService.execute(name, description);

      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { CreateSpecificationController };
