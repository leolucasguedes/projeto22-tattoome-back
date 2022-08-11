import { Router } from "express";

import authRouter from "./authRouter.js";
import depositionRouter from "./depositionRouter.js";
import budgetRouter from "./budgetRouter.js";
import portfolioRouter from "./portfolioRouter.js";

const router = Router();

router.use(authRouter);
router.use(depositionRouter);
router.use(budgetRouter);
router.use(portfolioRouter);

export default router;