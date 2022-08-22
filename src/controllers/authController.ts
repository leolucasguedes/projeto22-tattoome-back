import { Request, Response } from "express";
import { LoginBody } from "../schemas/authSchema";
import * as authService from "../services/authService";
import AppLog from "../events/AppLog";

export async function registerUser(req: Request, res: Response) {
  const { name, email, password }: { name: string, email: string, password: string} = req.body;
  const userInfo = { name, email, password};

  await authService.createUser(userInfo);

  AppLog("Controller", "Register user done");
  res.sendStatus(201);
}

export async function loginUser(req: Request, res: Response) {
  const userInfo: LoginBody = req.body;

  const sendUser = await authService.loginUser(userInfo);

  AppLog("Controller", "Login user done");
  res.status(200).send({ sendUser });
}