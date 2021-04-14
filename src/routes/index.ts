import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "../swagger.json";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRouter);

// documentation routes
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerConfig));

export { router };
