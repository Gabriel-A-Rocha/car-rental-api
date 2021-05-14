import { Category } from "../entities/Category";

interface ICategoriesRepository {
  create(name: string, description: string): Category;
  list(): Array<Category>;
  findByName(name: string): Category | undefined;
}

export { ICategoriesRepository };
