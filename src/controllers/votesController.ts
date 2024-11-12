// src/controllers/votesController.ts

import { Request, Response } from "express";
import { VoteDto } from "../DTO/vote";
import { handleNewVote } from "../services/votesService";

export const vote = async (req: Request<any, any, VoteDto>, res: Response) => {
  try {
    console.log({ vt: req.body });
    const data = await handleNewVote(req.body);
    console.log(data);
    
    res.json({ data });
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ err });
  }
};
