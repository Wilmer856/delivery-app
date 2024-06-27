import { Router } from "express";
import { loginUser } from "../controllers/user";

const router = Router()

// /api/users/login ---login route

router.post("/login", loginUser);

export default router;