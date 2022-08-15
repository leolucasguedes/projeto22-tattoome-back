import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import "./config/setup"

import router from "./routers/index";
import ExceptionHandler from './events/AppError';

const app = express();

app.use(cors());
app.use(json());
app.use(helmet());
app.use(router);
app.use(ExceptionHandler);

export default app;