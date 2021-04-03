import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesService {
  categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesService };
