// src/services/usersService.ts

import User, { IUser } from "../models/user";
import { RegisterDTO, LoginDTO } from "../DTO/user";

const registerUser = async (user: RegisterDTO): Promise<IUser> => {
  return await User.create(user);
};

const loginUser = async (user: LoginDTO): Promise<IUser | null> => {
  return await User.findOne({ username: user.username });
};

export { registerUser, loginUser };
