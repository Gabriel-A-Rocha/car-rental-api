import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute(data);

    return res.status(201).json();
  }
}
