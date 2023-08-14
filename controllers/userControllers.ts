import { Request, Response } from "express";
import { IUser, User } from "../models/userModel";
import asyncHandler from "express-async-handler";
const bcrypt = require("bcrypt");

export const RegisterUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, email, password }: IUser = req.body;
    //check all fields
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    //check if user exists and throw error
    const availableUser = await User.find({ email });
    if (availableUser) {
      res.status(400);
      throw new Error("User Already Exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("Something went wrong");
    }
  }
);

export const LoginUser = asyncHandler(async (req: Request, res: Response) => {
  res.json({ messsage: "login user route" });
});
