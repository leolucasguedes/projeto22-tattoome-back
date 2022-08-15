import { Request, Response } from "express";
import * as portfolioService from "../services/portfolioService";
import AppLog from "../events/AppLog";

export async function getPortfolio(req: Request, res: Response) {
  const images: any = await portfolioService.getImages();

  AppLog("Controller", "Get Portfolio done");
  res.status(200).send(images);
}
