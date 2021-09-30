import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import multer from "multer";
import { UploadAvatarController } from "../modules/accounts/useCases/updateAvatar/UploadAvatarController";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { uploadConfig } from "../config/upload";

const uploadAvatar = multer(uploadConfig("./tmp/avatar"));

export const usersRouter = Router();

usersRouter.route("/users").post(new CreateUserController().handle);

usersRouter
  .route("/users/upload-avatar")
  .patch(ensureAuthentication, uploadAvatar.single("avatar"), new UploadAvatarController().handle);
