import express from "express";

import {
  createOrder,
  getOrders,
  updateOrderStatus,
  addItemsToOrder,
} from "../controllers/OrderController.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.put("/:id", updateOrderStatus);

router.put("/:id/add-items", addItemsToOrder);

export default router;