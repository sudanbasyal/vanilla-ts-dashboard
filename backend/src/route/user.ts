import { Router } from "express";
import { deleteUser, getUser } from "../controller/user";
import { authenticate, authorize } from "../middleware/auth";
import { validateReqBody, validateReqParams } from "../middleware/validator";
import {
  createUserBodySchema,
  getUserQuerySchema,
  updateUserBodySchema,
  userIdSchema,
} from "../schema/user";
import { updateUser, createUser } from "../controller/user";
// import { authenticate, authorize } from "../middleware/auth";
// import { createUser } from "../controller/user";

// import { validateReqBody, validateReqParams } from "../middleware/validator";

const userRouter = Router();
userRouter.post(
  "/",
  // authenticate,
  // authorize("users.post"),
  // validateReqBody(createUserBodySchema),
  createUser
);

userRouter.get("/", authenticate, authorize("users.get"), getUser);

// userRouter.get(
//   "/:id",
//   authenticate,
//   validateReqParams(userIdSchema),
//   getUserById
// );

userRouter.put(
  "/:id",
  authenticate,
  authorize("users.put"),
  validateReqParams(userIdSchema),
  validateReqBody(updateUserBodySchema),
  updateUser
);

userRouter.delete(
  "/:id",
  authenticate,
  authorize("users.delete"),
  validateReqParams(userIdSchema),
  deleteUser
);

export default userRouter;
