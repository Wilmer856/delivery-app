import { Router } from "express";
import { getUsers, loginUser } from "../controllers/user";
import { requireAuth, requireRole } from "../middleware/requireAuth";

const router = Router()

// /api/users/login ---login route

router.post("/login", loginUser);

// /api/users/drivers ---obtains all drivers

router.get("/drivers", requireAuth, requireRole('admin'), getUsers);

export default router;