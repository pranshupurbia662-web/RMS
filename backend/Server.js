import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/Db.js";
import menuRoutes from "./routes/MenuRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());


// MENU ROUTE

app.use("/api/menu", menuRoutes);


app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});