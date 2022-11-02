import { Request, Response } from "express";
import * as depositionService from "../services/depositionService";
import AppLog from "../events/AppLog";

export async function createTestimonial(req: Request, res: Response) {
  const { stars, text, username, userId }: { stars: number, text: string, username: string, userId: number} = req.body;

  const testimonialInfo = { stars, text, username, userId};

  await depositionService.createOneTestimonial(testimonialInfo);

  AppLog("Controller", "Create testimonial done");
  res.sendStatus(201);
}

export async function getTestimonials(req: Request, res: Response) {
  const depositions = await depositionService.getDepositions();

  AppLog("Controller", "Get depositions done");
  res.status(200).send(depositions);
}

export async function deleteTestimonials(req: Request, res: Response) {
  const { id } = req.params;

  await depositionService.deleteDeposition(Number(id));

  AppLog("Controller", "Deposition removed done");
  res.sendStatus(200);
}