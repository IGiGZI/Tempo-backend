import mongoose from "mongoose";

const timeMarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      default: "",
      trim: true,
    },
    laps: [
      {
        lapNum: {
          type: Number,
          required: true,
        },
        lapDiff: {
          type: Number,
          required: true,
        },
        lapTime: {
          type: Number,
          required: true,
        }
      }
    ]
  },
  { timestamps: true }
);

const TimeMark = mongoose.model("TimeMark", timeMarkSchema);

export default TimeMark;