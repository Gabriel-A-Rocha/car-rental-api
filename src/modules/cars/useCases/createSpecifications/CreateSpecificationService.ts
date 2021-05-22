import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

export class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {
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

    await this.specificationsRepository.create(name, description);
  }
}
