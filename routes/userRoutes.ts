import express, { Router } from "express";
import { LoginUser, RegisterUser } from "../controllers/userControllers";

export const userRoute: Router = express.Router();

userRoute.post("/register", RegisterUser);

userRoute.post("/login", LoginUser);
