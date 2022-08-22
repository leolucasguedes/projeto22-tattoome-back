import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as authRepository from "../repositories/authRepository";
import { CreateUserData, LoginBody } from "../schemas/authSchema";

import AppError from "../config/error";
import AppLog from "../events/AppLog";

import "../config/setup"

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
  const sendUser = { id: user.id, name: user.name, token}

  AppLog("Service", "Login done");
  return sendUser;
}

export const authService = {
  createUser,
  loginUser
};