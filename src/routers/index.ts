import { Router } from "express";

import authRouter from "./authRouter";
import depositionRouter from "./depositionRouter";
import budgetRouter from "./budgetRouter";
import portfolioRouter from "./portfolioRouter";

const router = Router();

router.use(authRouter);
router.use(depositionRouter);
router.use(budgetRouter);
router.use(portfolioRouter);

export default router;