import * as portfolioRepository from "../repositories/portfolioRepository";

import AppError from "../config/error";
import AppLog from "../events/AppLog";

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
  return images;
}

export const portfolioService = {
  getImages
};