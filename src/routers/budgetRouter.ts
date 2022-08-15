import { Router } from "express";
import multer from "multer";
import validSchema from "../middlewares/schemaValidator"
import budgetSchema from "../schemas/budgetSchema";
import * as budgetController from "../controllers/budgetController"
import multerConfig from "../config/multer"
const budgetRouter = Router();

budgetRouter.post("/budget", validSchema(budgetSchema, "./budget"), budgetController.createBudget);
budgetRouter.post("/budget/images", multer(multerConfig).single('file'));

export default budgetRouter;