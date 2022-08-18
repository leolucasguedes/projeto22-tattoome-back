import prisma from "../config/db";

export async function find() {
  await prisma.portfolio.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export const portfolioRepository = {
  find
};