import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const instantiateCreateCategoryController = (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const createCategoryController = new CreateCategoryController(createCategoryService);
  return createCategoryController;
};

export { instantiateCreateCategoryController };
