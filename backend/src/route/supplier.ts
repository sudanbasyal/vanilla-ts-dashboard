import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { validateReqBody, validateReqParams } from "../middleware/validator";
import uploader from "../middleware/fileupload";

import {
  deleteCompanies,
  getCompanies,
  registerCompany,
} from "../controller/supplier";
import { companyBodySchema } from "../schema/supplier";

const supplierRouter = Router();

supplierRouter.post(
  "/",
  authenticate,
  authorize("company.post"),
  uploader.fields([
    { name: "photo", maxCount: 1 },
    { name: "pan-photo", maxCount: 1 },
  ]),
  validateReqBody(companyBodySchema),
  registerCompany
);

supplierRouter.get("/", authenticate, authorize("company.get"), getCompanies);

supplierRouter.delete(
  "/:id",
  authenticate,
  authorize("company.get"),
  deleteCompanies
);

export default supplierRouter;
