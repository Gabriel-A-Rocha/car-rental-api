import { Request, Response } from "express";
import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
  private createSpecificationService: CreateSpecificationService;

  constructor(createSpecificationService: CreateSpecificationService) {
    this.createSpecificationService = createSpecificationService;
  }
  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      const newSpecification = this.createSpecificationService.execute(name, description);

      return res.status(201).json(newSpecification);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { CreateSpecificationController };
