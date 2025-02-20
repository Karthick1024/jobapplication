import 'express-async-errors'
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";


//routers

import jobRouter from "./routes/jobRouter.js";


//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.use("/api/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Your server is running on ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1)  
}
