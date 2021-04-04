import { VolatileCategoriesRepository } from "../../repositories/implementations/VolatileCategoriesRepository";
import { ListCategoriesController } from "../listCategories/ListCategoriesController";
import { ListCategoriesService } from "../listCategories/ListCategoriesService";

const categoriesRepository = VolatileCategoriesRepository.getInstance();

const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { listCategoriesController };
