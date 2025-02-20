import mongoose from "mongoose";

const Jobschema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["Interview", "Declined", "Pending"],
      default: "Pending",
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship"],
      default: "Full-time",
    },
    jobLocation: {
      type: String,
      default: "My city",
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", Jobschema);
