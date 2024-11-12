// src/controllers/votesController.ts

import { Request, Response } from "express";
import { VoteDto } from "../DTO/vote";
import { handleNewVote } from "../services/votesService";

export const vote = async (req: Request<any, any, VoteDto>, res: Response) => {
  try {
    const data = await handleNewVote(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
};
