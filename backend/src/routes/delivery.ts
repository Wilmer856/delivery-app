import { Router } from "express";
import { getDeliveries, getDelivery } from "../controllers/delivery";

const router = Router();

// /api/delivery
router.get("/", getDeliveries);

router.get("/:id", getDelivery);

// router.post("/", createDelivery);


export default router;
