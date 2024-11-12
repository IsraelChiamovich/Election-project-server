// src/services/votesService.ts

import Candidate from "../models/candidates";
import User from "../models/user";
import { VoteDto } from "../DTO/vote";

export const handleNewVote = async (vote: VoteDto) => {
  try {
    const user = await User.findById(vote.userId);
    if (user?.hasVoted) {
      throw new Error("User has already voted");
    }

    await Candidate.findByIdAndUpdate(vote.candidateId, {
      $inc: {
        votes: 1,
      },
    });
    await User.findByIdAndUpdate(vote.userId, {
      $set: {
        hasVoted: true,
        votedFor: vote.candidateId,
      },
    });

    return {
      status: "DONE",
    };
  } catch (err) {
    return {
      status: "ERROR",
      err: err as Error,
    };
  }
};
