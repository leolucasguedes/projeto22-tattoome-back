import { Router } from "express";

import validSchema from "../middlewares/schemaValidator"
import depositionSchema from "../schemas/depositionSchema";
import * as depositionController from "../controllers/depositionController"

const depositionRouter = Router();

depositionRouter.post("/deposition", validSchema(depositionSchema, "./deposition"), depositionController.createTestimonial);

export default depositionRouter;