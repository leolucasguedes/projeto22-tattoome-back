import prisma from "../config/db";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema";

export async function create(budget: CreateBudgetData | CreateBudgetDataNoUser) {
  await prisma.budget.create({ data: budget });
}

export const budgetRepository = {
  create
};