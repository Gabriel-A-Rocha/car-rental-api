import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { VolatileSpecificationsRepository } from "../../repositories/implementations/VolatileSpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";

const instantiateListSpecificationController = () => {
  const listSpecificationsController = new ListSpecificationsController();
  return listSpecificationsController;
};

export { instantiateListSpecificationController };
