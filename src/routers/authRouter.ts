import { Router } from "express";

import validSchema from "../middlewares/schemaValidator"
import { signUpSchema, loginSchema } from "../schemas/authSchema";
import { verifyUser } from "../middlewares/userValidator";
import * as authController from "../controllers/authController"

const authRouter = Router();

authRouter.post("/signup", validSchema(signUpSchema, "./signup"), authController.registerUser);
authRouter.post("/signin", validSchema(loginSchema, "/signin"), verifyUser, authController.loginUser);

export default authRouter;