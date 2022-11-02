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
budgetRouter.post("/posts", multer(multerConfig).single('file'), async (req, res) => {
    const localFilePath = req.file.path;

    const result: any = await uploadToCloudinary(localFilePath);

    const budgetId: number = await budgetService.getBudgetId();

    const reference = await budgetService.saveReference(result, budgetId)
    res.status(200).send(reference);
});
budgetRouter.delete("/posts/:id", budgetController.deleteImage);
budgetRouter.get("/budget/user/:id", budgetController.getUserBudgets);
budgetRouter.delete("/budget/:id", budgetController.deleteBudget);

export default budgetRouter;