import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecifications";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRouter = Router();

specificationsRouter
  .route("/")

  .post((req, res) => createSpecificationController.handle(req, res))

  .get((req, res) => listSpecificationsController.handle(req, res));

export { specificationsRouter };
