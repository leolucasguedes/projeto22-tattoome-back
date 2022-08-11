import prisma from "../config/db.js";
import { CreateDepositionData } from "../schemas/depositionSchema.js";

export async function create(testimonial: CreateDepositionData) {
  await prisma.deposition.create({ data: testimonial });
}