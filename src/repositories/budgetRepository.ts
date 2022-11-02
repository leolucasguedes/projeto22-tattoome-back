import prisma from "../config/db";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema";

export async function create(budget: CreateBudgetData | CreateBudgetDataNoUser) {
  const budgetData = await prisma.budget.create({ data: budget });
  return budgetData;
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

export async function removeOneBudget(id: number) {
  await prisma.budget.delete({ where:{id} });
}

export async function save(url: string, budgetId: number) {
  const referenceData = {image: url, budgetId: budgetId};
  const reference = await prisma.reference.create({ data: referenceData });
  return reference;
}

export async function remove(id: number) {
  await prisma.reference.delete({ where:{id} });
}

export const budgetRepository = {
  create,
  getUserBudgets,
  get,
};