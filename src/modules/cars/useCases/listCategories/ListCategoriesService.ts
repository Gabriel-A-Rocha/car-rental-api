import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute() {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
