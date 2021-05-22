import { Specification } from "../entities/Specification";

export interface ISpecificationsRepository {
  create(name: string, description: string): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
  list(): Promise<Specification[]>;
}
