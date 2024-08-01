import { Router } from "express";
import { deleteUser, getUser } from "../controller/user";
import { authenticate, authorize } from "../middleware/auth";
import { validateReqBody, validateReqParams } from "../middleware/validator";
import { updateUserBodySchema, userIdSchema } from "../schema/user";
import { updateUser, createUser } from "../controller/user";
import { getAllUsers } from "../controller/user";

const userRouter = Router();
userRouter.post("/", createUser);

userRouter.get("/", authenticate, authorize("users.get"), getUser);

userRouter.get("/all", authenticate, authorize("users.get"), getAllUsers);

userRouter.put(
  "/",
  authenticate,
  authorize("users.put"),
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
