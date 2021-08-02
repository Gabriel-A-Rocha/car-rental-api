import { Router } from "express";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import {
  CreateSpecificationController,
  ListSpecificationsController,
} from "../modules/cars/useCases";

export const specificationsRouter = Router();

specificationsRouter.use(ensureAuthentication);

specificationsRouter
  .route("/specifications")
  .post(new CreateSpecificationController().handle)
  .get(new ListSpecificationsController().handle);
