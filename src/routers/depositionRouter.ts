import { Router } from "express";

import validSchema from "../middlewares/schemaValidator"
import depositionSchema from "../schemas/depositionSchema";
import { validToken } from "../middlewares/tokenValidator";
import * as depositionController from "../controllers/depositionController"

const depositionRouter = Router();

depositionRouter.post("/deposition", validSchema(depositionSchema, "./deposition"), validToken, depositionController.createTestimonial);
depositionRouter.get("/deposition", depositionController.getTestimonials);
depositionRouter.delete("/deposition/:id", validToken, depositionController.deleteTestimonials);

export default depositionRouter;