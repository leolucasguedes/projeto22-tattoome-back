import prisma from "../config/db";
import { CreateDepositionData } from "../schemas/depositionSchema";

export async function create(testimonial: CreateDepositionData) {
  await prisma.deposition.create({ data: testimonial });
}

export async function get() {
  const depositions = await prisma.deposition.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return depositions;
}

export async function remove(id: number) {
  await prisma.deposition.delete({ where:{id} });
}

export const depositionRepository = {
  create,
  get,
  remove
};