import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";
import { swaggerRouter } from "./swagger.routes";
import "../shared/dependencyInjections";
import { usersRouter } from "./users.routes";
import { authenticationRouter } from "./authentication.routes";

export const router = Router();

router.use(categoriesRouter);
router.use(specificationsRouter);
router.use(usersRouter);
router.use(authenticationRouter);

router.use(swaggerRouter);
