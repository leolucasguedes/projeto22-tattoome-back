import { Request, Response } from "express";
import * as budgetService from "../services/budgetService";
import AppLog from "../events/AppLog";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema";

export async function createBudget(req: Request, res: Response) {
  const body: CreateBudgetData | CreateBudgetDataNoUser = req.body;
  let budgetInfo = { ...body };

  await budgetService.createOneBudget(budgetInfo);

  AppLog("Controller", "Create budget done");
  res.sendStatus(201);
}

export async function getUserBudgets(req: Request, res: Response) {
  const { id } = req.params;
  
  const results = await budgetService.getBudgets(Number(id));

  AppLog("Controller", "Budgets got");
  res.status(200).send(results);
};

export async function deleteBudget(req: Request, res: Response) {
  const { id } = req.params;

  await budgetService.deleteOneBudget(Number(id));

  AppLog("Controller", "Budget removed done");
  res.sendStatus(200);
}

export async function deleteImage(req: Request, res: Response) {
  const { id } = req.params;
  
  await budgetService.deleteReference(Number(id));

  AppLog("Controller", "Image deleted");
  res.sendStatus(200);
};