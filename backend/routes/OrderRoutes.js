import express from "express";

import {
  createOrder,
  getOrders,
  updateOrderStatus,
  addItemsToOrder,
  getOrderByTable,
} from "../controllers/OrderController.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

// Table number se active order find karne ke liye
router.get("/table/:tableNo", getOrderByTable);

router.put("/:id", updateOrderStatus);

router.put("/:id/add-items", addItemsToOrder);

export default router;