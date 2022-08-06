import { Request, Response } from "express";
import { CreateUserData, LoginBody } from "../schemas/authSchema.js";
import * as AS from "../services/authService.js";
import AppLog from "../events/AppLog.js";

export async function registerUser(req: Request, res: Response) {
  const { name, email, password }: { name: string, email: string, password: string} = req.body;
  const userInfo = { name, email, password};

  await AS.createUser(userInfo);

  AppLog("Controller", "Register user done");
  res.sendStatus(201);
}

export async function loginUser(req: Request, res: Response) {
  const userInfo: LoginBody = req.body;

  const token = await AS.loginUser(userInfo);

  AppLog("Controller", "Login user done");
  res.status(200).send({ token });
}