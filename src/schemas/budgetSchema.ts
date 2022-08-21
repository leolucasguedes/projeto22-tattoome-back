import Joi from "joi";
import { Budget } from "@prisma/client";

export type CreateBudgetData = Omit<Budget, "id" | "createdAt">;
export type CreateBudgetDataNoUser = Omit<CreateBudgetData, "userId">;

const budgetSchema = Joi.object<CreateBudgetData>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    number: Joi.string().max(11).required(),
    description: Joi.string().required(),
    size: Joi.string().required(),
    userId: Joi.number()
  });

export default budgetSchema;