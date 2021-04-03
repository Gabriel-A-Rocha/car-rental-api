import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesService {
  categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  handle() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesService };
