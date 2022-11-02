import Joi from "joi";
import { Deposition } from "@prisma/client";

export type CreateDepositionData = Omit<Deposition, "id" | "createdAt">;

const depositionSchema = Joi.object<CreateDepositionData>({
    stars: Joi.number().min(0).max(100).required(),
    text: Joi.string().required(),
    username: Joi.string().required(),
    userId: Joi.number().required(),
  });

export default depositionSchema;
  
