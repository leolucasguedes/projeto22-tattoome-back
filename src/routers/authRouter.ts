import { Router } from "express";

import validSchema from "../middlewares/schemaValidator.js"
import { signUpSchema, loginSchema } from "../schemas/authSchema.js";
import * as AC from "../controllers/authController.js"

const authRouter = Router();

authRouter.post("/signup", validSchema(signUpSchema, "./signup"), AC.registerUser);
authRouter.post("/signin", validSchema(loginSchema, "/signin"), AC.loginUser);

export default authRouter;