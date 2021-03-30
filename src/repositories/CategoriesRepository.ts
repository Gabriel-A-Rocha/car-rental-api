import { Category } from "../models/Category";

class CategoriesRepository {
  private categories: Array<Category>;

  constructor() {
    this.categories = [];
  }

  create(name: string, description: string) {
    if (this.findByName(name)) {
      return false;
    }

    const category = new Category(name, description);

    this.categories.push(category);

    return category;
  }

  list(): Array<Category> {
    return this.categories;
  }

  findByName(name: string) {
    return this.categories.find((c) => c.name === name);
  }
}

export { CategoriesRepository };
