import { Request, Response } from "express";
import * as portfolioService from "../services/portfolioService.js";
import AppLog from "../events/AppLog.js";

export async function getPortfolio(req: Request, res: Response) {
  const images: any = await portfolioService.getImages();

  AppLog("Controller", "Get Portfolio done");
  res.status(200).send(images);
}
