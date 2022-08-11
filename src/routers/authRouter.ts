import { Router } from "express";

import validSchema from "../middlewares/schemaValidator.js"
import { signUpSchema, loginSchema } from "../schemas/authSchema.js";
import { verifyUser } from "../middlewares/userValidator.js";
import * as authController from "../controllers/authController.js"

const authRouter = Router();

authRouter.post("/signup", validSchema(signUpSchema, "./signup"), authController.registerUser);
authRouter.post("/signin", validSchema(loginSchema, "/signin"), verifyUser, authController.loginUser);

export default authRouter;