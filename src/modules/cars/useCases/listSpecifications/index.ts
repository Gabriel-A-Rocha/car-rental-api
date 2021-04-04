import { VolatileSpecificationsRepository } from "../../repositories/implementations/VolatileSpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";

const specificationsRepository = VolatileSpecificationsRepository.getInstance();
const listSpecificationsController = new ListSpecificationsController();

export { specificationsRepository, listSpecificationsController };
