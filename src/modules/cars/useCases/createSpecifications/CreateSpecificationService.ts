import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class CreateSpecificationService {
  specificationsRepository: ISpecificationsRepository;

  constructor(specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  async execute(name: string, description: string): Promise<void> {
    if (!name || !description) {
      throw "Empty parameters.";
    }

    const specificationRecord = await this.specificationsRepository.findByName(name);

    if (specificationRecord) {
      throw "Specification name already exists.";
    }

    this.specificationsRepository.create(name, description);
  }
}

export { CreateSpecificationService };
