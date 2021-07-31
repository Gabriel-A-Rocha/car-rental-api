import { inject, injectable } from "tsyringe";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcrypt";

@injectable()
export class CreateUserService {
  constructor(@inject("IUsersRepository") private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: ICreateUserDTO): Promise<void> {
    const userRecord = await this.usersRepository.findByEmail(data.email);

    if (userRecord) {
      throw "Email already created";
    }

    const passwordHash = await hash(data.password, 12);
    await this.usersRepository.create({ ...data, password: passwordHash });
  }
}
