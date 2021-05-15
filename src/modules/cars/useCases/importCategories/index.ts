import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesService } from "./ImportCategoriesService";

const instantiateImportCategoriesController = () => {
  const categoriesRepository = new CategoriesRepository();
  const importCategoriesService = new ImportCategoriesService(categoriesRepository);
  const importCategoriesController = new ImportCategoriesController(importCategoriesService);
  return importCategoriesController;
};

export { instantiateImportCategoriesController };
