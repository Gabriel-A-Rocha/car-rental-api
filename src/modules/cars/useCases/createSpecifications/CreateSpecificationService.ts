import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
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
      throw new AppError(400, "Empty parameter");
    }

    //const specificationsRepository = container.resolve(SpecificationsRepository);
    const specificationRecord = await this.specificationsRepository.findByName(name);

    if (specificationRecord) {
      throw new AppError(400, "Specification name already exists");
    }

    await this.specificationsRepository.create(name, description);
  }
}
