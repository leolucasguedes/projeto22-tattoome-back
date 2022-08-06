import Joi from "joi";
import { User } from "@prisma/client";

export type CreateUserData = Omit<User, "id" | "createdAt">;
export type SignUpBody = CreateUserData & { confirmPassword: string };
export type LoginBody = Omit<CreateUserData, "name">;

export const signUpSchema = Joi.object<SignUpBody>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  });
  
  export const loginSchema = Joi.object<LoginBody>({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });