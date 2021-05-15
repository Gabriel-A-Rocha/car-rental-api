import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const instantiateCreateSpecificationController = () => {
  const specificationsRepository = new SpecificationsRepository();
  const createSpecificationsService = new CreateSpecificationService(specificationsRepository);
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationsService
  );
  return createSpecificationController;
};

export { instantiateCreateSpecificationController };
