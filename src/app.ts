import { Request, Response } from "express";
import express from "express";

import cors from "cors";
import { router } from "./app/modules/routes/routes";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Ocean's Bounty");
});

app.use("/api", router);

export default app;
