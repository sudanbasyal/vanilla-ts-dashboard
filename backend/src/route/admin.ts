import { authenticate, authorize } from "./../middleware/auth";
import { Router } from "express";

import {
  deleteSelectedUser,
  getAllPendingCompanies,
  getAllUsers,
  getSelectedUser,
  verifyCompany,
} from "../controller/admin";
``
import { validateReqParams } from "../middleware/validator";
import { companyIdSchema } from "../schema/supplier";
import { userIdSchema } from "../schema/user";

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
  validateReqParams(companyIdSchema),
  verifyCompany
);

adminRouter.get(
  "/users",
  authenticate,
  authorize("users.get"),
  validateReqParams(companyIdSchema),
  getAllUsers
);

adminRouter.get(
  "/users/:id",
  authenticate,
  authorize("users.get"),
  validateReqParams(userIdSchema),
  getSelectedUser
);

adminRouter.delete(
  "/users/:id",
  authenticate,
  authorize("users.delete"),
  validateReqParams(userIdSchema),
  deleteSelectedUser
);

export default adminRouter;
