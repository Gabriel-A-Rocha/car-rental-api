import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "../listCategories/ListCategoriesController";
import { ListCategoriesService } from "../listCategories/ListCategoriesService";

export const instantiateListCategoryController = () => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoriesService = new ListCategoriesService(categoriesRepository);
  return new ListCategoriesController(listCategoriesService);
};
