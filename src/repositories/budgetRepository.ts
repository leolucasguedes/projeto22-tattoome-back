import prisma from "../config/db.js";
import { CreateBudgetData } from "../schemas/budgetSchema.js";

export async function create(budget: CreateBudgetData) {
  await prisma.budget.create({ data: budget });
}