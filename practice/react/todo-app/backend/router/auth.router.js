import express from "express";
import { createUser, loginUser, refreshToken } from "../controllers/user.contoller.js";

const authRouter = express.Router();

authRouter.post("/signup", createUser)

authRouter.post("/login", loginUser)

authRouter.post("/refresh", refreshToken)

export default authRouter;