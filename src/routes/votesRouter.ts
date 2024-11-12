// src/routes/votesRouter.ts

import { Router } from "express";
import { vote } from "../controllers/votesController";
import { verify } from "jsonwebtoken";
import verifyUser from "../middlewares/verifyUser";

const router = Router();

router.post("/", verifyUser, vote);

export default router;
