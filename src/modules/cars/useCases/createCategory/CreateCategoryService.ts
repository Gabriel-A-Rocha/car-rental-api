import { inject, injectable } from "tsyringe";
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
      throw "Empty parameter";
    }

    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw "Category already exists";
    }

    await this.categoriesRepository.create(name, description);
  }
}
