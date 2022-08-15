import { Request, Response } from "express";
import * as depositionService from "../services/depositionService";
import AppLog from "../events/AppLog";

export async function createTestimonial(req: Request, res: Response) {
  const { stars, text, username }: { stars: number, text: string, username: string} = req.body;
  const user = res.locals.user || {id: 1};
  const userId: number = user.id;

  const testimonialInfo = { stars, text, username, userId};

  await depositionService.createOneTestimonial(testimonialInfo);

  AppLog("Controller", "Create testimonial done");
  res.sendStatus(201);
}