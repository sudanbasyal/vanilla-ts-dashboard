import { authenticate, authorize } from "./../middleware/auth";
import { Router } from "express";

import { getAllPendingCompanies } from "../controller/admin";

const adminRouter = Router();

adminRouter.post(
  "/pending-companies",
  authenticate,
  authorize("company.verify"),
  getAllPendingCompanies
);


export default adminRouter;
