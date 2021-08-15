import { response } from "express";
import { Multer } from "multer";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class UploadAvatarService {
  constructor(
    @inject("IUsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(userId: string, avatarFilePath: string) {
    const user = await this.usersRepository.findById(userId);

    user.avatar = avatarFilePath;

    await this.usersRepository.create(user);
  }
}
