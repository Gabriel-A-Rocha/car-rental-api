import { Specification } from "../../models/Specification";
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

  create(name: string, description: string): Specification {
    const specification = new Specification(name, description);

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification | undefined {
    const specificationRecord = this.specifications.find((s) => s.name === name);

    return specificationRecord;
  }

  list() {
    return this.specifications;
  }
}

export { VolatileSpecificationsRepository };
