import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

export const authenticationRouter = Router();

authenticationRouter.route("/authentication").post(new AuthenticateUserController().handle);
