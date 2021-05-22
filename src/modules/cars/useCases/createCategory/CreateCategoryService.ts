import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(name: string, description: string): Promise<void> {
    if (!name || !description) {
      throw "Empty parameters.";
    }

    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw "Category already exists.";
    }

    await this.categoriesRepository.create(name, description);
  }
}
