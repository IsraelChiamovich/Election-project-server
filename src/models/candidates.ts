// src/models/candidates.ts

import { Document, Model, Schema, model } from "mongoose";

export interface ICandidate extends Document {
  name: string;
  image: string;
  votes: number;
}

const candidateSchema = new Schema<ICandidate>({
  name: { type: String, required: true },
  image: { type: String },
  votes: { type: Number, default: 0 },
});

const Candidate: Model<ICandidate> = model<ICandidate>("Candidate", candidateSchema);
export default Candidate;
