import { authenticate, authorize } from "./../middleware/auth";
import { Router } from "express";

import {
  deleteSelectedUser,
  getAllPendingCompanies,
  getAllUsers,
  getSelectedUser,
  verifyCompany,
} from "../controller/admin";

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

adminRouter.get("/users", authenticate, authorize("users.get"), getAllUsers);

adminRouter.get(
  "/users/:id",
  authenticate,
  authorize("users.get"),
  getSelectedUser
);

adminRouter.delete(
  "/users/:id",
  authenticate,
  authorize("users.delete"),
  deleteSelectedUser
);

export default adminRouter;
