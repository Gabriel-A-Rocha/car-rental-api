import { Specification } from "../entities/Specification";

interface ISpecificationsRepository {
  create(name: string, description: string): Specification;
  findByName(name: string): Specification | undefined;
  list(): Array<Specification>;
}

export { ISpecificationsRepository };
