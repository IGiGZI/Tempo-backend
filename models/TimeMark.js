import mongoose from "mongoose";

const timeMarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    duration: {
      type: Number, // store as milliseconds or centiseconds — your choice, just be consistent
      required: true,
    },
    note: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const TimeMark = mongoose.model("TimeMark", timeMarkSchema);

export default TimeMark;