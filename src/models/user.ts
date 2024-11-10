// src/models/user.ts

import { Model, model, Schema, Types, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  password: string;
  isAdmin: boolean;
  hasVoted: boolean;
  votedFor: Types.ObjectId | null;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    hasVoted: { type: Boolean, default: false },
    votedFor: { type: Schema.Types.ObjectId, ref: "Candidate", default: null },
});

userSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User: Model<IUser> = model<IUser>("User", userSchema);
export default User;
