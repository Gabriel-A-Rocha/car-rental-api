import { Category } from "../models/Category";

class CategoriesRepository {
  private categories: Array<Category>;

  constructor() {
    this.categories = [];
  }

  create(name: string, description: string): Category {
    const category = new Category(name, description);

    this.categories.push(category);

    return category;
  }

  list(): Array<Category> {
    return this.categories;
  }
}

export { CategoriesRepository };
