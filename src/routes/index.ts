import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";
import { swaggerRouter } from "./swagger.routes";
import "../shared/dependencyInjections";

export const router = Router();

router.use(categoriesRouter);
router.use(specificationsRouter);
router.use(swaggerRouter);
