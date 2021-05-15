import { Specification } from "../entities/Specification";

interface ISpecificationsRepository {
  create(name: string, description: string): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
  list(): Promise<Specification[]>;
}

export { ISpecificationsRepository };
