import prisma from "../config/db.js";

export async function reset() {
  await prisma.deposition.deleteMany();
  await prisma.budget.deleteMany();
}

export const testRepository = {
  reset,
};