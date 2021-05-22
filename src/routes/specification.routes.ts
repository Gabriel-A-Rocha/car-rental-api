import { Router } from "express";
import {
  instantiateCreateSpecificationController,
  instantiateListSpecificationController,
} from "../modules/cars/useCases";

const specificationsRouter = Router();

specificationsRouter
  .route("/")
  .post((req, res) => instantiateCreateSpecificationController().handle(req, res))
  .get((req, res) => instantiateListSpecificationController().handle(req, res));

export { specificationsRouter };
