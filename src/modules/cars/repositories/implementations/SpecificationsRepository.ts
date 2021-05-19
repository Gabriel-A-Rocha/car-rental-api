import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specificationsRepository: Repository<Specification>;

  constructor() {
    this.specificationsRepository = getRepository(Specification);
  }

  async create(name: string, description: string): Promise<void> {
    const record = await this.specificationsRepository.findOne(name);

    if (!record) {
      const specification = this.specificationsRepository.create({ name, description });
      await this.specificationsRepository.save(specification);
    }
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const record = await this.specificationsRepository.findOne({ where: { name } });
    return record;
  }

  async list(): Promise<Specification[]> {
    const records = await this.specificationsRepository.find();
    return records;
  }
}

export { SpecificationsRepository };
