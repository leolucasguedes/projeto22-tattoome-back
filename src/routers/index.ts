import { Router } from "express";

import authRouter from "./authRouter.js";
import depositionRouter from "./depositionRouter.js";
import budgetRouter from "./budgetRouter.js";

const router = Router();

router.use(authRouter);
router.use(depositionRouter);
router.use(budgetRouter);

export default router;