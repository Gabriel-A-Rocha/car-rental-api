import { Router } from "express";
import { instantiateCreateSpecificationController } from "../modules/cars/useCases/createSpecifications";
import { instantiateListSpecificationController } from "../modules/cars/useCases/listSpecifications";

const specificationsRouter = Router();

specificationsRouter
  .route("/")

  .post((req, res) => {
    const createSpecificationController = instantiateCreateSpecificationController();
    createSpecificationController.handle(req, res);
  })

  .get((req, res) => {
    const listSpecificationsController = instantiateListSpecificationController();
    listSpecificationsController.handle(req, res);
  });

export { specificationsRouter };
