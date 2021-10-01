import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { v4 as uuid } from "uuid";
import { join } from "path";
import fs from "fs";
import { AppError } from "../../../../errors/AppError";
import { deleteFile } from "../../../../utils/file";

@injectable()
export class UploadAvatarService {
  constructor(
    @inject("IUsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(userId: string, file: Express.Multer.File) {
    const user = await this.usersRepository.findById(userId);

    const { path, destination, originalname } = file;

    await deleteFile(user.avatar);
    console.log(
      "🚀 ~ file: UploadAvatarService.ts ~ line 22 ~ UploadAvatarService ~ execute ~ user.avatar",
      user.avatar
    );

    const newFilePath = join(destination, uuid() + "-" + originalname);

    fs.rename(path, newFilePath, (err) => {
      if (err) {
        console.log(err);
      }
    });

    user.avatar = newFilePath;

    await this.usersRepository.create(user);
  }
}
