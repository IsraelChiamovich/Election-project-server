// src/services/candidatesService.ts

import Candidate, { ICandidate } from "../models/candidates";

const getAllCandidates = async (): Promise<ICandidate[]> => {
  return await Candidate.find();
};

export { getAllCandidates };
