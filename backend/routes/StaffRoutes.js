import express from "express";
import Staff from "../models/StaffModel.js";

const router = express.Router();


// GET ALL STAFF

router.get("/", async (req, res) => {
  try {
    const staff = await Staff.find();

    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ADD STAFF

router.post("/", async (req, res) => {
  try {
    const newStaff = await Staff.create(req.body);

    res.status(201).json(newStaff);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// UPDATE STAFF

router.patch("/:id", async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedStaff) {
      return res.status(404).json({
        success: false,
        message: "Staff not found",
      });
    }

    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// DELETE STAFF

router.delete("/:id", async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(
      req.params.id
    );

    if (!deletedStaff) {
      return res.status(404).json({
        success: false,
        message: "Staff not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Staff deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;