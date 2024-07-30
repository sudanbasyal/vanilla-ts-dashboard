import { authenticate } from "./../middleware/auth";
import { Router } from "express";
import { getAllServices } from "../controller/service";
import { getServicesByIds } from "../service/services";

const serviceRouter = Router();

serviceRouter.get("/", authenticate, getAllServices);

export default serviceRouter;
