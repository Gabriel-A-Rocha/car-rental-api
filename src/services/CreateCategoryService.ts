import { CategoriesRepository } from "../repositories/CategoriesRepository";

class CreateCategoryService {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(name: string, description: string) {
    if (!name || !description) {
      throw "Empty parameters.";
    }

    const categoryExists = this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw "Category already exists.";
    }

    const newCategory = this.categoriesRepository.create(name, description);

    return newCategory;
  }
}

export { CreateCategoryService };
