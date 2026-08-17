import express from "express";
import TimeMark from "../models/TimeMark.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// strong note : router.use(authMiddleware) applies auth check on every route in this file - no need to repeat it per route

// All routes below require a valid token
router.use(authMiddleware);

// Create a time-mark
router.post("/", async (req, res) => {
  try {
    const { duration, note } = req.body;

    if (duration === undefined) {
      return res.status(400).json({ message: "Duration is required" });
    }

    const timeMark = await TimeMark.create({
      user: req.userId,
      duration,
      note: note || "",
    });

    res.status(201).json(timeMark);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// List all time-marks for the logged-in user
router.get("/", async (req, res) => {
  try {
    const timeMarks = await TimeMark.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(timeMarks);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Delete a time-mark
router.delete("/:id", async (req, res) => {
  try {
    const timeMark = await TimeMark.findOne({ _id: req.params.id, user: req.userId });

    if (!timeMark) {
      return res.status(404).json({ message: "Time-mark not found" });
    }

    await timeMark.deleteOne();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;