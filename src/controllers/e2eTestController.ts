import { Request, Response } from "express";
import { testRepository } from "../repositories/e2eTestRepository";

export async function reset(req: Request, res: Response) {
  await testRepository.reset();
  res.sendStatus(200);
}