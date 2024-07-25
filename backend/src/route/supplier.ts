import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { validateReqBody, validateReqParams } from "../middleware/validator";
import uploader from "../middleware/fileupload";

import { company, RegisterCompany } from "../controller/supplier";
import { companyBodySchema } from "../schema/supplier";

const supplierRouter = Router();
// supplierRouter.post(
//   "/",
//   // authenticate,
//   // authorize("users.post"),
//   // validateReqBody(createUserBodySchema),
//   uploader.fields([
//     { name: "company-photo", maxCount: 1 },
//     { name: "pan-photo", maxCount: 1 },
//   ]),
//   RegisterCompany
// );

supplierRouter.post(
  "/",
  // authenticate,
  // authorize("users.post"),
  uploader.fields([
    { name: "photo", maxCount: 1 },
    { name: "pan-photo", maxCount: 1 },
  ]),
  validateReqBody(companyBodySchema),

  company
);

export default supplierRouter;
