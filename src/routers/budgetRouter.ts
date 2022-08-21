import { Router } from "express";
import multer from "multer";
import validSchema from "../middlewares/schemaValidator"
import budgetSchema from "../schemas/budgetSchema";
import * as budgetController from "../controllers/budgetController"
import * as budgetService from "../services/budgetService";
import multerConfig from "../config/multer";
import { uploadToCloudinary } from "../config/cloudnary";

const budgetRouter = Router();

budgetRouter.post("/budget", validSchema(budgetSchema, "./budget"), budgetController.createBudget);
budgetRouter.get("/budget/user/:id", budgetController.getUserBudgets);
budgetRouter.post("/posts", multer(multerConfig).single('file'), async (req, res) => {
    const locaFilePath = req.file.path;

    const result: any = await uploadToCloudinary(locaFilePath);

    const budgetId: number = await budgetService.getBudgetId();

    await budgetService.saveReference(result, budgetId)
    res.json("Budget done");
});

export default budgetRouter;