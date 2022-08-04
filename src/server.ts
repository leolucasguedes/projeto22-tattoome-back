import { Request, Response } from "express";
import app from "./app.js";
import AppLog from "./events/AppLog.js";

const PORT = process.env.PORT || 5000;
app.get("/", async (_req: Request, res: Response) => res.send("Online"));
app.listen(PORT, () => AppLog("Server", `Server is running on port ${PORT}`));
