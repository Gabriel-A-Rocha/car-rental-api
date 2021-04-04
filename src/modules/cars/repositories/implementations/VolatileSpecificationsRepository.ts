import { Specification } from "../../models/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class VolatileSpecificationsRepository implements ISpecificationsRepository {
  private specifications: Array<Specification>;

  constructor() {
    this.specifications = [];
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
