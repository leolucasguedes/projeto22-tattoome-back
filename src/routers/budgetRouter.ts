import { Router } from "express";
import multer from "multer";
import validSchema from "../middlewares/schemaValidator.js"
import budgetSchema from "../schemas/budgetSchema.js";
import * as budgetController from "../controllers/budgetController.js"
import multerConfig from "../config/multer.js"
const budgetRouter = Router();

budgetRouter.post("/budget", validSchema(budgetSchema, "./budget"), budgetController.createBudget);
budgetRouter.post("/budget/images", multer(multerConfig).single('file'));

export default budgetRouter;