import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private categoriesRepository: Repository<Category>;

  constructor() {
    this.categoriesRepository = getRepository(Category);
  }

  async create(name: string, description: string): Promise<void> {
    const category = this.categoriesRepository.create({
      name,
      description,
    });
    await this.categoriesRepository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.categoriesRepository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.categoriesRepository.findOne({
      where: {
        name,
      },
    });
    return category;
  }
}
