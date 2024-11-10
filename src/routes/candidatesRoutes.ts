// src/routes/candidates.ts

import express from "express";
import { getCandidates } from "../controllers/adminController";

const router = express.Router();

router.get("/", getCandidates);

export default router;