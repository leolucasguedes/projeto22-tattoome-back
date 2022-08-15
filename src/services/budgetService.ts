import * as budgetRepository from "../repositories/budgetRepository";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema";

import AppLog from "../events/AppLog";

import "../config/setup"

export async function createOneBudget(budgetInfo: CreateBudgetData | CreateBudgetDataNoUser) {

  await budgetRepository.create(budgetInfo);
  AppLog("Service", "Budget Created");
}

export const budgetService = {
  createOneBudget
};