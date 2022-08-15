import { Router } from "express";

import * as portfolioController from "../controllers/portfolioController"

const portfolioRouter = Router();

portfolioRouter.get("/images", portfolioController.getPortfolio);

export default portfolioRouter;