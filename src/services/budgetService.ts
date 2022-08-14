import * as budgetRepository from "../repositories/budgetRepository.js";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema.js";

import AppLog from "../events/AppLog.js";

import "../config/setup.js"

export async function createOneBudget(budgetInfo: CreateBudgetData | CreateBudgetDataNoUser) {

  await budgetRepository.create(budgetInfo);
  AppLog("Service", "Budget Created");
}