import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";
import supplierRoutes from "./supplier";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/suppliers", supplierRoutes);

export default router;
