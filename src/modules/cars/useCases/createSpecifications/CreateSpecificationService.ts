import { container } from "tsyringe";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class CreateSpecificationService {
  async execute(name: string, description: string): Promise<void> {
    if (!name || !description) {
      throw "Empty parameter";
    }

    const specificationsRepository = container.resolve(SpecificationsRepository);
    const specificationRecord = await specificationsRepository.findByName(name);

    if (specificationRecord) {
      throw "Specification name already exists.";
    }

    await specificationsRepository.create(name, description);
  }
}
