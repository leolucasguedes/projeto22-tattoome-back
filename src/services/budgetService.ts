import * as budgetRepository from "../repositories/budgetRepository.js";
import { CreateBudgetData } from "../schemas/budgetSchema.js";

import AppLog from "../events/AppLog.js";

import "../config/setup.js"

export async function createOneBudget(budgetInfo: CreateBudgetData) {

  await budgetRepository.create(budgetInfo);
  AppLog("Service", "Budget Created");
}