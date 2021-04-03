import { VolatileCategoriesRepository } from "../../repositories/VolatileCategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const categoriesRepository = VolatileCategoriesRepository.getInstance();

const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController };
