// src/controllers/adminController.ts

import { Request, Response } from "express";
import { getAllCandidates } from "../services/candidatesService";

const getCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await getAllCandidates();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidates", error });
  }
};

export { getCandidates };
