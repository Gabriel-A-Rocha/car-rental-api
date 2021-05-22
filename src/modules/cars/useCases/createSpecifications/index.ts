import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

export const instantiateCreateSpecificationController = () => {
  const specificationsRepository = new SpecificationsRepository();
  const createSpecificationsService = new CreateSpecificationService(specificationsRepository);
  return new CreateSpecificationController(createSpecificationsService);
};
