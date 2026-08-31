import express from "express"
import Lap from "../models/Lap"
import authMiddleware from "../middleware/auth"

const router = express.Router()

router.use(authMiddleware);

// POST
router.post("/", async (req, res) => {
  try {
    const { lapNum, lapDiff, lapTime, timeMark } = req.body;

    if (lapNum === undefined || lapDiff === undefined || lapTime === undefined || !timeMark) {
      return res.status(400).json({ message: "All lap data is required" });
    }

    const lap = await Lap.create({
      user: req.userId,
      timeMark,
      lapNum,
      lapDiff,
      lapTime
    });

    res.status(201).json(lap);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET
router.get("/:timeMarkId", async (req, res) => {
  try {
    const { timeMarkId } = req.params

    const lap = await Lap.find({ user: req.userId, timeMark: timeMarkId }).sort({ lapNum: 1 });
    res.json(lap);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;