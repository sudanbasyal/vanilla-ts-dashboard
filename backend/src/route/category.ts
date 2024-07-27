import { Router } from "express";
import { getAllCategories } from "../controller/category";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);

export default categoryRouter;
