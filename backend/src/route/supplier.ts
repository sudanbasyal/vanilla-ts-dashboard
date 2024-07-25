import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { validateReqBody, validateReqParams } from "../middleware/validator";
import uploader from "../middleware/fileupload";

import { RegisterCompany } from "../controller/supplier";

const supplierRouter = Router();
supplierRouter.post(
  "/",
  // authenticate,
  // authorize("users.post"),
  // validateReqBody(createUserBodySchema),
  uploader.fields([
    { name: "company-photo", maxCount: 1 },
    // { name: "services-photo", maxCount: 4 },
  ]),
  RegisterCompany
);

export default supplierRouter;
