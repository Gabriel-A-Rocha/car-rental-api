import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, password, email, driver_licence } = data;

    /* const userRecord = await this.repository.findOne({ where: { email } });
    if (userRecord.email) {
      throw "Email already created";
    } */

    const newUser = this.repository.create({
      name,
      password,
      email,
      driver_licence,
    });

    await this.repository.save(newUser);
  }
}
