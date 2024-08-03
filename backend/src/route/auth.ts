import { Router } from "express";
import { getUser, login } from "../controller/auth";
import { authenticate } from "../middleware/auth";

const authRouter = Router();

authRouter.post("/login", login);

authRouter.get("/me", authenticate, getUser);

export default authRouter;
