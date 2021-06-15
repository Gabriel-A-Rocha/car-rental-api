import { container, inject, injectable } from "tsyringe";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
export class CreateSpecificationService {
  constructor(
    @inject("ISpecificationsRepository") private specificationsRepository: ISpecificationsRepository
  ) {
    this.specificationsRepository = specificationsRepository;
  }

  async execute(name: string, description: string): Promise<void> {
    if (!name || !description) {
      throw "Empty parameter";
    }

    //const specificationsRepository = container.resolve(SpecificationsRepository);
    const specificationRecord = await this.specificationsRepository.findByName(name);

    if (specificationRecord) {
      throw "Specification name already exists";
    }

    await this.specificationsRepository.create(name, description);
  }
}
