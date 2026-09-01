import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: false,
    },
    authProvider: {
      type: String, 
      enum: ["local", "google"], 
      default: "local"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;