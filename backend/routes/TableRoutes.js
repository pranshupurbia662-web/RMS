import express from "express";
import Table from "../models/TableModel.js";

const router = express.Router();


// GET ALL TABLES

router.get("/", async (req, res) => {
  try {
    const tables = await Table.find().sort({ tableNo: 1 });

    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ADD TABLE

router.post("/", async (req, res) => {
  try {
    const { tableNo, seats, status } = req.body;

    const tableExists = await Table.findOne({ tableNo });

    if (tableExists) {
      return res.status(400).json({
        success: false,
        message: "Table already exists",
      });
    }

    const table = await Table.create({
      tableNo,
      seats,
      status,
      currentOrder: null,
    });

    res.status(201).json(table);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// DELETE TABLE

router.delete("/:id", async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);

    if (!table) {
      return res.status(404).json({
        success: false,
        message: "Table not found",
      });
    }

    await Table.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Table deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// UPDATE TABLE STATUS

router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const table = await Table.findById(req.params.id);

    if (!table) {
      return res.status(404).json({
        success: false,
        message: "Table not found",
      });
    }

    table.status = status;

    await table.save();

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      table,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;