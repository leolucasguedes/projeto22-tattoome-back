import * as authRepository from "../repositories/authRepository.js";
import * as depositionRepository from "../repositories/depositionRepository.js";
import { CreateDepositionData } from "../schemas/depositionSchema.js";

import AppError from "../config/error.js";
import AppLog from "../events/AppLog.js";

import "../config/setup.js"

export async function createOneTestimonial(testimonialInfo: CreateDepositionData) {
  const userRegistered = await authRepository.findUser(testimonialInfo.userId);
  if (!userRegistered) {
    throw new AppError(
        "User not found",
        404,
        "User not found",
        "Ensure to provide a valid user id"
    );
  }

  await depositionRepository.create(testimonialInfo);
  AppLog("Service", "Testimonial Created");
}