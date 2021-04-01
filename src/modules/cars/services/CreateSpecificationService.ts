import { Specification } from "../models/Specification";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
  specificationsRepository: ISpecificationsRepository;

  constructor(specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  execute(name: string, description: string): Specification {
    if (!name || !description) {
      throw "Empty parameters.";
    }

    const specificationRecord = this.specificationsRepository.findByName(name);

    if (specificationRecord) {
      throw "Specification name already exists.";
    }

    const newSpecification = this.specificationsRepository.create(name, description);

    return newSpecification;
  }
}

export { CreateSpecificationService };
