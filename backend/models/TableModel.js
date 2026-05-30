import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  tableNo: {
    type: Number,
    required: true,
    unique: true,
  },

  seats: {
    type: Number,
    required: true,
    default: 4,
  },

  status: {
    type: String,
    enum: ["Available", "Occupied", "Reserved"],
    default: "Available",
  },

  currentOrder: {
    type: String,
    default: null,
  },
});

const Table = mongoose.model("Table", tableSchema);

export default Table;