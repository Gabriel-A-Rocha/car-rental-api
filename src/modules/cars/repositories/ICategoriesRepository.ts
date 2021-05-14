import { Category } from "../entities/Category";

interface ICategoriesRepository {
  create(name: string, description: string): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}

export { ICategoriesRepository };
