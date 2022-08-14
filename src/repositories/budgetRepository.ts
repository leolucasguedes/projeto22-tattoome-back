import prisma from "../config/db.js";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema.js";

export async function create(budget: CreateBudgetData | CreateBudgetDataNoUser) {
  await prisma.budget.create({ data: budget });
}