import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as authRepository from "../repositories/authRepository.js";
import { CreateUserData, LoginBody } from "../schemas/authSchema.js";

import AppError from "../config/error.js";
import AppLog from "../events/AppLog.js";

import "../config/setup.js"

export async function createUser(userInfo: CreateUserData) {
  const SALT_ROUNDS: number = +process.env.SALT_ROUNDS || 10;
  const userRegistered = await authRepository.findByEmail(userInfo.email);
  if (userRegistered) {
    throw new AppError(
      "Email alrealdy registered",
      409,
      "Email alrealdy registered",
      "Ensure to provide a valid new email"
    );
  }

  const hashPassword = bcrypt.hashSync(userInfo.password, SALT_ROUNDS);
  userInfo.password = hashPassword;

  await authRepository.create(userInfo);
  AppLog("Service", "User Created");
}

export async function loginUser(userInfo: LoginBody) {
  const user = await authRepository.findByEmail(userInfo.email);

  if (!user) {
    throw new AppError(
      "Email not registered",
      404,
      "Email not registered",
      "Ensure to provide a registered email"
    );
  }
  if (!bcrypt.compareSync(userInfo.password, user.password)) {
    throw new AppError(
      "Password error",
      401,
      "Password error",
      "Ensure to provide the right password"
    );
  }

  const secretKey = process.env.JWT_KEY;
  delete user.password;
  const token = jwt.sign(user, secretKey);

  AppLog("Service", "Login done");
  return token;
}