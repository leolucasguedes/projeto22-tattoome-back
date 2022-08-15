import { Router } from "express";
import { reset } from "../controllers/e2eTestController";

const e2eRouter = Router();

e2eRouter.post("/reset", reset);

export default e2eRouter;