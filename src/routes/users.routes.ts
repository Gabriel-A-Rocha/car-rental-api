import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

export const usersRouter = Router();

usersRouter.route("/users").post(new CreateUserController().handle);
