import { Router } from "express";
import {
  instantiateCreateSpecificationController,
  instantiateListSpecificationController,
} from "../modules/cars/useCases";

export const specificationsRouter = Router();

specificationsRouter
  .route("/specifications")
  .post((req, res) => instantiateCreateSpecificationController().handle(req, res))
  .get((req, res) => instantiateListSpecificationController().handle(req, res));
