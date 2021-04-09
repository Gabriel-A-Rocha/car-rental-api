import { VolatileCategoriesRepository } from "../../repositories/implementations/VolatileCategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesService } from "./ImportCategoriesService";

const categoriesRepository = VolatileCategoriesRepository.getInstance();

const importCategoriesService = new ImportCategoriesService(categoriesRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesService);

export { importCategoriesController, importCategoriesService };
