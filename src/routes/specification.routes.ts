import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecifications";

const specificationsRouter = Router();

specificationsRouter
  .route("/")

  .post((req, res) => createSpecificationController.handle(req, res))

  .get((req, res) => {
    // const specifications = specificationsRepository.list();

    return res.status(200).json();
  });

export { specificationsRouter };
