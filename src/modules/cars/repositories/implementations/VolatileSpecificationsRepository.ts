import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class VolatileSpecificationsRepository implements ISpecificationsRepository {
  private specifications: Array<Specification>;
  private static singletonInstance: VolatileSpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!this.singletonInstance) {
      this.singletonInstance = new VolatileSpecificationsRepository();
    }
    return this.singletonInstance;
  }

  async create(name: string, description: string): Promise<void> {
    const specification = new Specification(name, description);
    this.specifications.push(specification);
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specificationRecord = this.specifications.find((s) => s.name === name);
    return specificationRecord;
  }

  async list(): Promise<Specification[]> {
    return this.specifications;
  }
}

export { VolatileSpecificationsRepository };
