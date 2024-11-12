// src/routes/candidates.ts

import express from "express";
import { getCandidates } from "../controllers/candidatesController";
import verifyUser from "../middlewares/verifyUser";

const router = express.Router();

router.get("/", verifyUser, getCandidates);

export default router;
