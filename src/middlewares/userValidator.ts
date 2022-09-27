import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import AppError from "../config/error";

import { findUserByEmail } from "../repositories/authRepository";

export async function verifyUser(req: Request, res: Response, next: NextFunction) {
  const { email }: { email: string } = req.body;

  const user: User = await findUserByEmail(email);

  if (!user) {
    throw new AppError(
      "User not found",
      404,
      "User not found",
      "Ensure to provide a valid user email"
    );
  }

  res.locals.user = user;
  next();
}
