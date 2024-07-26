import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";
import supplierRoutes from "./supplier";
import categoryRoutes from "./category";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/suppliers", supplierRoutes);
router.use("/categories", categoryRoutes);

export default router;
