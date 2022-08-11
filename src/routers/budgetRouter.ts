import { Router } from "express";

import validSchema from "../middlewares/schemaValidator.js"
import budgetSchema from "../schemas/budgetSchema.js";
import * as budgetController from "../controllers/budgetController.js"

const budgetRouter = Router();

budgetRouter.post("/budget", validSchema(budgetSchema, "./budget"), budgetController.createBudget);

export default budgetRouter;