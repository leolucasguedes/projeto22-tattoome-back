import prisma from "../config/db";
import { CreateDepositionData } from "../schemas/depositionSchema";

export async function create(testimonial: CreateDepositionData) {
  await prisma.deposition.create({ data: testimonial });
}

export const depositionRepository = {
  create
};