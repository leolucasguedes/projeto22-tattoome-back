import prisma from "../config/db";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema";

export async function create(budget: CreateBudgetData | CreateBudgetDataNoUser) {
  const budgetData = await prisma.budget.create({ data: budget });
  return budgetData;
}

export async function save(url: string, budgetId: number) {
  const reference = {image: url, budgetId: budgetId}
  await prisma.reference.create({ data: reference});
}

export async function getUserBudgets(userId: number) {
  const results = await prisma.budget.findMany({ where: { userId } });
  return results;
}

export async function get() {
  const size = await prisma.budget.groupBy({
    by: ["id"],
  });
  return size;
}

export const budgetRepository = {
  create
};