import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "../listCategories/ListCategoriesController";
import { ListCategoriesService } from "../listCategories/ListCategoriesService";

const categoriesRepository = new CategoriesRepository();

const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { listCategoriesController };
