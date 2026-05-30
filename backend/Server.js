import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/Db.js";
import menuRoutes from "./routes/MenuRoutes.js";
import tableRoutes from "./routes/TableRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// MENU ROUTES
app.use("/api/menu", menuRoutes);

// TABLE ROUTES
app.use("/api/tables", tableRoutes);

app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});