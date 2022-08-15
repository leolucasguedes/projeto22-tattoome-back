import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { findUser } from "../repositories/authRepository";
import jwt from "jsonwebtoken";

import AppError from "../config/error";
import AppLog from "../events/AppLog";

import "../config/setup";

type TokenUser = Omit<User, "password">;

export async function validToken(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers["authorization"];
  const token = authorization?.replace("Bearer", "").trim();

  if (!authorization) {
    throw new AppError(
      "Missing authorization header",
      401,
      "Missing authorization header",
      "Ensure to provide a valid token"
    );
  }

  const secretKey = process.env.JWT_KEY;
  const userInfo = jwt.verify(token, secretKey) as TokenUser;

  if (!userInfo.email) {
    throw new AppError(
      "Token invalid",
      401,
      "Token invalid",
      "Ensure to provide a valid token"
    );
  }

  const user = await findUser(Number(userInfo.id));

  if (!user || user.id !== userInfo.id) {
    throw new AppError(
      "Token invalid",
      401,
      "Token invalid",
      "Ensure to provide a valid token"
    );
  }

  res.locals.user = user;
  AppLog("Middleware", "Token validated");
  next();
}