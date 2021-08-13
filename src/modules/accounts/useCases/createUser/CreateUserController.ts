import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const data = req.body;

      const createUserService = container.resolve(CreateUserService);
      await createUserService.execute(data);

      return res.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}
