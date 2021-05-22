import { Router } from "express";
import {
  CreateSpecificationController,
  ListSpecificationsController,
} from "../modules/cars/useCases";

export const specificationsRouter = Router();

specificationsRouter
  .route("/specifications")
  .post(new CreateSpecificationController().handle)
  .get(new ListSpecificationsController().handle);
