// src/services/usersService.ts

import User, { IUser } from "../models/user";
import { RegisterDTO, LoginDTO, ProfileDto } from "../DTO/user";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const registerUser = async (user: RegisterDTO): Promise<IUser> => {
  const existingUser = await User.findOne({ username: user.username });
  if (existingUser) throw new Error("User already exists");
  return await User.create(user);
};

const loginUser = async (userData: LoginDTO): Promise<{ user: IUser; token: string }> => {
  const userfromDB = await User.findOne({ username: userData.username });
  if (!userfromDB) throw new Error("User not found");

  const isPasswordMatch = await bcrypt.compare(userData.password, userfromDB.password!);
  if (!isPasswordMatch) throw new Error("Invalid password");

  const token = Jwt.sign(
    {
      user_id: userfromDB._id,
      username: userfromDB.username,
      isAdmin: userfromDB.isAdmin,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "10m" }
  );

  const user = userfromDB.toObject() as IUser;
  delete user.password; 
  
  return { user, token };
};

const getUserData = async (user: ProfileDto) => {
  try {
    if (!user.id) throw new Error(`"Missing user data, ${user.id} is required"`);
    return await User.findById(user.id).lean();
  } catch (err) {
    throw new Error("Can't create new user");
  }
};

export { registerUser, loginUser, getUserData };
