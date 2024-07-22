// import { Router } from "express";
// import { createAccount, deleteUser, getProfile } from "../controller/user";
// import { authenticate, authorize } from "../middleware/auth";
// import { validateReqBody, validateReqParams } from "../middleware/validator";
// import {
//   createUserBodySchema,
//   getUserQuerySchema,
//   updateUserBodySchema,
//   userIdSchema,
// } from "../schema/user";
// import { updateUserProfile } from "../controller/user";

// const userRouter = Router();
// userRouter.post(
//   "/",
//   authenticate,
//   authorize("users.post"),
//   validateReqBody(createUserBodySchema),
//   createAccount
// );

// userRouter.get(
//   "/me/:id",
//   authenticate,
//   authorize("users.get"),
//   validateReqParams(userIdSchema),
//   getProfile
// );

// // userRouter.get(
// //   "/:id",
// //   authenticate,
// //   validateReqParams(userIdSchema),
// //   getUserById
// // );

// userRouter.put(
//   "/:id",
//   authenticate,
//   authorize("users.put"),
//   validateReqParams(userIdSchema),
//   validateReqBody(updateUserBodySchema),
//   updateUserProfile
// );

// userRouter.delete(
//   "/:id",
//   authenticate,
//   authorize("users.delete"),
//   validateReqParams(userIdSchema),
//   deleteUser
// );

// export default userRouter;
