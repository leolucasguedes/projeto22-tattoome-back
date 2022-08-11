import { Router } from "express";

import validSchema from "../middlewares/schemaValidator.js"
import depositionSchema from "../schemas/depositionSchema.js";
import * as depositionController from "../controllers/depositionController.js"

const depositionRouter = Router();

depositionRouter.post("/deposition", validSchema(depositionSchema, "./deposition"), depositionController.createTestimonial);

export default depositionRouter;