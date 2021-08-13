import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";
import { swaggerRouter } from "./swagger.routes";
import "../shared/dependencyInjections";
import { usersRouter } from "./users.routes";
import { authenticationRouter } from "./authentication.routes";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";

export const router = Router();

router.use(usersRouter);
router.use(authenticationRouter);
router.use(swaggerRouter);

// authenticated routes
router.use(ensureAuthentication);
router.use(categoriesRouter);
router.use(specificationsRouter);
