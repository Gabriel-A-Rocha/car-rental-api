import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesService {
  constructor(
    @inject("ICategoriesRepository") private categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute() {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
