import * as depositionRepository from "../repositories/depositionRepository";
import { CreateDepositionData } from "../schemas/depositionSchema";

import AppLog from "../events/AppLog";

export async function createOneTestimonial(testimonialInfo: CreateDepositionData) {

  await depositionRepository.create(testimonialInfo);
  AppLog("Service", "Testimonial Created");
}

export async function getDepositions() {

  const depositions = await depositionRepository.get();
  AppLog("Service", "Testimonials got");
  return depositions;
}

export const depositionService = {
  createOneTestimonial,
  getDepositions
};