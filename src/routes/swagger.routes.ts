import swaggerUi from "swagger-ui-express";
import swaggerConfig from "../swagger.json";
import { Router } from "express";

export const swaggerRouter = Router();

swaggerRouter.use("/api-docs", swaggerUi.serve);
swaggerRouter.get("/api-docs", swaggerUi.setup(swaggerConfig));
