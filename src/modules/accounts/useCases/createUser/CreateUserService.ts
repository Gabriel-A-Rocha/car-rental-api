import { inject, injectable } from "tsyringe";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserService {
  constructor(@inject("IUsersRepository") private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create(data);
  }
}
