import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { UploadAvatarService } from "./UploadAvatarService";

export class UploadAvatarController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id;
      const { file } = req;

      const uploadAvatarService = container.resolve(UploadAvatarService);
      await uploadAvatarService.execute(userId, file);

      return res.status(204).json({ msg: "Avatar successfully updated" });
    } catch (error) {
      next(error);
    }
  }
}
