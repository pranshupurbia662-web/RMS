import express from "express";
import Menu from "../models/MenuModel.js";

const router = express.Router();


// GET ALL MENU ITEMS

router.get("/", async (req, res) => {

  try {

    const menuItems = await Menu.find();

    res.json(menuItems);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// TOGGLE AVAILABILITY

router.patch("/:id", async (req, res) => {

  try {

    const item = await Menu.findById(req.params.id);

    item.isAvailable = !item.isAvailable;

    await item.save();

    res.json(item);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// ADD NEW ITEM

router.post("/", async (req, res) => {

  try {

    const newItem = new Menu(req.body);

    const savedItem = await newItem.save();

    res.status(201).json(savedItem);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

export default router;