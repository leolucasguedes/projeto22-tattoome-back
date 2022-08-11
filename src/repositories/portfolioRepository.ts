import prisma from "../config/db.js";

export async function find() {
  await prisma.portfolio.findMany();
}
