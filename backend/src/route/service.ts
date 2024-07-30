import { authenticate } from "./../middleware/auth";
import { Router } from "express";
import { getAllServices, getCompaniesByService } from "../controller/service";
import { getServicesByIds } from "../service/services";

const serviceRouter = Router();

serviceRouter.get("/", authenticate, getAllServices);

serviceRouter.get("/companies", getCompaniesByService);

export default serviceRouter;
