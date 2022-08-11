import { Router } from "express";

import validSchema from "../middlewares/schemaValidator.js"
import depositionSchema from "../schemas/depositionSchema.js";
import * as depositionController from "../controllers/depositionController.js"

const authRouter = Router();

authRouter.post("/deposition", validSchema(depositionSchema, "./deposition"), depositionController.createTestimonial);

export default authRouter;