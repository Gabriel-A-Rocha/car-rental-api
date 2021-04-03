import { VolatileCategoriesRepository } from "../repositories/VolatileCategoriesRepository";
import { CreateCategoryController } from "./createCategory/CreateCategoryController";
import { CreateCategoryService } from "./createCategory/CreateCategoryService";
import { ListCategoriesController } from "./listCategories/ListCategoriesController";
import { ListCategoriesService } from "./listCategories/ListCategoriesService";

const categoriesRepository = new VolatileCategoriesRepository();

const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { createCategoryController, listCategoriesController };
