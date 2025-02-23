import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "My city",
  },
  role: {
    type: String,
    enum: ["user", 'admin'],
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
