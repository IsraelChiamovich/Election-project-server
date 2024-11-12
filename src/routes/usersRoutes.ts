// src/routes/usersRoutes.ts

import express from "express";
import { login, profile, register } from "../controllers/usersController";
import verifyUser from "../middlewares/verifyUser";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/profile", verifyUser, profile);

export default router;
