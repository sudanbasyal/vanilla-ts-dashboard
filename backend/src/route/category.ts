import { Router } from "express";
import { getAllCategories } from "../controller/category";

const categoryRouter = Router();


// authRouter.post("/login", login);

categoryRouter.get("/", getAllCategories);
// authRouter.post("/signup", signup);
// authRouter.post("/refresh-token", refreshToken);

export default categoryRouter;
