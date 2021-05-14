import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static singletonInstance: CategoriesRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  static getInstance() {
    if (!this.singletonInstance) {
      this.singletonInstance = new CategoriesRepository();
    }
    return this.singletonInstance;
  }

  async create(name: string, description: string): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      where: {
        name,
      },
    });
    return category;
  }
}

export { CategoriesRepository };
