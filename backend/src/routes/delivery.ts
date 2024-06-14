import { Router } from "express";
import { deleteDelivery, getDeliveries, getDelivery } from "../controllers/delivery";

const router = Router();

// /api/delivery
router.get("/", getDeliveries);

// /api/delivery/1
router.get("/:id", getDelivery);

// api/delivery/1
router.delete("/:id", deleteDelivery)

// router.post("/", createDelivery);


export default router;
