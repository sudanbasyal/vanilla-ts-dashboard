import { authenticate, authorize } from "./../middleware/auth";
import { Router } from "express";

import { getAllPendingCompanies, verifyCompany } from "../controller/admin";

const adminRouter = Router();

adminRouter.post(
  "/pending-companies",
  authenticate,
  authorize("company.verify"),
  getAllPendingCompanies
);

adminRouter.put(
  "/verify-company/:id",
  authenticate,
  authorize("company.verify"),
  verifyCompany
);

export default adminRouter;
