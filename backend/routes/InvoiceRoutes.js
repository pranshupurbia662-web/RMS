import express from "express";
import Invoice from "../models/InvoiceModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const invoiceCount = await Invoice.countDocuments();

    const invoiceNo = `INV-${1001 + invoiceCount}`;

    const invoice = await Invoice.create({
      invoiceNo,
      ...req.body,
    });

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });

    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;