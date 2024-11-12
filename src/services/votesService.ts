// src/services/votesService.ts

import Candidate from "../models/candidates";
import User from "../models/user";
import { VoteDto } from "../DTO/vote";

export const handleNewVote = async (vote: VoteDto) => {
  try {
    console.log({vote});

    const user = await User.findById(vote.userId);
    if (user?.hasVoted) {
      return {
        status: "ERROR",
        message: "User has already voted",
      };
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
    console.log("done");
    
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
