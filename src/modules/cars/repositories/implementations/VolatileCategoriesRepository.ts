import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class VolatileCategoriesRepository implements ICategoriesRepository {
  private categories: Array<Category>;

  private static singletonInstance: VolatileCategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance() {
    if (!this.singletonInstance) {
      this.singletonInstance = new VolatileCategoriesRepository();
    }

    return this.singletonInstance;
  }

  create(name: string, description: string): Category {
    const category = new Category(name, description);

    this.categories.push(category);

    return category;
  }

  list(): Array<Category> {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((c) => c.name === name);
  }
}

export { VolatileCategoriesRepository };
