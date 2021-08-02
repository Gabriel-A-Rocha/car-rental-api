import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class CreateCategoryService {
  constructor(
    @inject("ICategoriesRepository") private categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(name: string, description: string): Promise<void> {
    if (!name || !description) {
      throw new AppError(400, "Empty parameter");
    }

    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new AppError(400, "Category already exists");
    }

    await this.categoriesRepository.create(name, description);
  }
}
