import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, username, password, email, driver_licence } = data;

    const newUser = this.repository.create({
      name,
      username,
      password,
      email,
      driver_licence,
    });

    await this.repository.save(newUser);
  }
}
