import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import multer from "multer";
import { UploadAvatarController } from "../modules/accounts/useCases/updateAvatar/UploadAvatarController";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";

const upload = multer({ dest: "./tmp/avatar" });

export const usersRouter = Router();

usersRouter.route("/users").post(new CreateUserController().handle);

usersRouter
  .route("/users/upload-avatar")
  .patch(ensureAuthentication, upload.single("avatar"), new UploadAvatarController().handle);
