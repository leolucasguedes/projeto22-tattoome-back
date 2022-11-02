import * as budgetRepository from "../repositories/budgetRepository";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema";

import AppLog from "../events/AppLog";

export async function createOneBudget(budgetInfo: CreateBudgetData | CreateBudgetDataNoUser) {

  await budgetRepository.create(budgetInfo);
  AppLog("Service", "Budget Created");
}

export async function saveReference(url: string, budgetId: number) {

  const reference = await budgetRepository.save(url, budgetId);
  AppLog("Service", "Reference saved");
  return reference;
}

export async function deleteReference(id: number) {

  await budgetRepository.remove(id);
  AppLog("Service", "Reference deleted");
}

export async function getBudgets(id: number) {
  const results = await budgetRepository.getUserBudgets(id);

  return results;
}

export async function getBudgetId() {
  const result = await budgetRepository.get();

  const size = result.length + 1;
  return size;
}

export async function deleteOneBudget(id: number) {

  await budgetRepository.removeOneBudget(id);
  AppLog("Service", "Budget deleted");
}

export const budgetService = {
  createOneBudget
};