import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    shift: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive", "On Leave"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

// IMPORTANT: use existing "staff" collection
const Staff = mongoose.model(
  "Staff",
  staffSchema,
  "staff"
);

export default Staff;