import mongoose from "mongoose";

const lapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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
    },
    timeMark:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "TimeMark",
      required:true
    }
  }
);

const Lap = mongoose.model("Lap", lapSchema);

export default Lap;