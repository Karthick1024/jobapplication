import mongoose from "mongoose";
import { JOB_STATUS,JOB_TYPE } from "../utils/constants.js";

const Jobschema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default:JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULLTIME,
    },
    jobLocation: {
      type: String,
      default: "My city", 
    },
    createdBy:{
      type:mongoose.Types.ObjectId,
      ref:'User'
    }
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", Jobschema);
