import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";
import supplierRoutes from "./supplier";
import categoryRoutes from "./category";
import adminRoutes from "./admin";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/suppliers", supplierRoutes);
router.use("/categories", categoryRoutes);
router.use("/admin", adminRoutes);

export default router;
