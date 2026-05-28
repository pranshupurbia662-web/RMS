import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  type: {
    type: String,
  },

  image: {
    type: String,
    required: true,
  },

  isAvailable: {
    type: Boolean,
    default: true,
  },

}, {
  timestamps: true,
});

const Menu = mongoose.model(
  "Menu",
  menuSchema
);

export default Menu;