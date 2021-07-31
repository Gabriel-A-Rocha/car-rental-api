import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "./AuthenticateUserService";

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const authenticateUserService = container.resolve(AuthenticateUserService);

      const authenticationInfo = await authenticateUserService.execute({ email, password });

      return res.json(authenticationInfo);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
