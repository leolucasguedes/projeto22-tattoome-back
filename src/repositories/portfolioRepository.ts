import prisma from "../config/db";

export async function find() {
  await prisma.portfolio.findMany();
}

export const portfolioRepository = {
  find
};