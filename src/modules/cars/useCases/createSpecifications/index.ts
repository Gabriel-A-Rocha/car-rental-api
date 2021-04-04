import { VolatileSpecificationsRepository } from "../../repositories/implementations/VolatileSpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const specificationsRepository = VolatileSpecificationsRepository.getInstance();
const createSpecificationsService = new CreateSpecificationService(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationsService
);

export { createSpecificationController, createSpecificationsService };
