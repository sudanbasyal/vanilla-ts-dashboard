import { Router } from "express";
import { getAllCategories } from "../service/category";

const authRouter = Router();

// authRouter.post("/login", login);

authRouter.post("/categories", getAllCategories);
// authRouter.post("/signup", signup);
// authRouter.post("/refresh-token", refreshToken);

export default authRouter;
