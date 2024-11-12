// src/controllers/usersController.ts

import { Request, Response } from "express";
import { getUserData, loginUser, registerUser } from "../services/usersService";
import { ProfileDto } from "../DTO/user";

const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "User registration failed", error });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "User login failed", error });
  }
};

const profile = async (req: Request<any, any, ProfileDto>,res: Response) => {
  try {
    const data = await getUserData(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json((err as Error).message);
  }
};

export { register, login, profile };
