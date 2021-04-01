import { Category } from "../models/Category";

interface ICategoriesRepository {
  create(name: string, description: string): Category;
  list(): Array<Category>;
  findByName(name: string): Category | undefined;
}

export { ICategoriesRepository };
