import { container } from "tsyringe";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../modules/cars/repositories/ICategoriesRepository";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../modules/cars/repositories/ISpecificationsRepository";
import { IUsersRepository } from "../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository>("ICategoriesRepository", CategoriesRepository);

container.registerSingleton<ISpecificationsRepository>(
  "ISpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>("IUsersRepository", UsersRepository);
