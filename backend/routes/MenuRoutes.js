import express from "express";

import Menu from "../models/MenuModel.js";

const router = express.Router();



/* GET ALL MENU ITEMS */

router.get("/", async (req, res) => {

  try {

    const menuItems = await Menu.find();

    res.json(menuItems);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

});



/* ADD NEW MENU ITEM */

router.post("/", async (req, res) => {

  console.log(req.body);

  try {

    const newItem = new Menu(req.body);

    const savedItem = await newItem.save();

    console.log(savedItem);

    res.status(201).json({

      success: true,

      message: "Menu Item Added Successfully",

      savedItem,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

});



/* TOGGLE AVAILABILITY */

router.patch("/:id", async (req, res) => {

  try {

    const item = await Menu.findById(req.params.id);

    item.isAvailable = !item.isAvailable;

    await item.save();

    res.json(item);

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: error.message,

    });

  }

});

export default router;