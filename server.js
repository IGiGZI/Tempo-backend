import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import authRoutes from "./routes/auth.js"
import timeMarkRoutes from "./routes/timemarks.js"

dotenv.config();

connectDB()

const app = express();

app.use(cors());
app.use(express.json()); // parsing JSON request bodies (needed for signup/login/time-mark data)

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes)
app.use('/api/timemarks', timeMarkRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});