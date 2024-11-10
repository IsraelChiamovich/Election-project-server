// src/controllers/usersController.ts

import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/usersService";

const register = async (req: Request, res: Response) => {
  const { username, password, isAdmin } = req.body;
  try {
    const user = await registerUser({ username, password, isAdmin });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ message: "User registration failed", error });
  }
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await loginUser({ username, password });
    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    res.status(401).json({ message: "User login failed", error });
  }
};

export { register, login };
