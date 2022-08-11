import * as portfolioRepository from "../repositories/portfolioRepository.js";

import AppError from "../config/error.js";
import AppLog from "../events/AppLog.js";

import "../config/setup.js";

export async function getImages() {
  const images: any = await portfolioRepository.find();
  if (!images) {
    throw new AppError(
      "Images not found",
      404,
      "Images not found",
      "Ensure to provide a valid type"
    );
  }
  AppLog("Service", "Images got");
}
