import prisma from "../config/db";

export async function find() {
  const images = await prisma.portfolio.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return images;
}

export const portfolioRepository = {
  find
};