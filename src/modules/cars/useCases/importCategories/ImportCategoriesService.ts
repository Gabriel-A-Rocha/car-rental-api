import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoriesService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  execute(file: string) {
    console.log(file);
    return this.categoriesRepository.list();
  }
}

export { ImportCategoriesService };
