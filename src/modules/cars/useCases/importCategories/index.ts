import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesService } from "./ImportCategoriesService";

export const instantiateImportCategoriesController = () => {
  const categoriesRepository = new CategoriesRepository();
  const importCategoriesService = new ImportCategoriesService(categoriesRepository);
  return new ImportCategoriesController(importCategoriesService);
};
