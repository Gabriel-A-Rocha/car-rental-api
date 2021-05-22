import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesService {
  categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute() {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
