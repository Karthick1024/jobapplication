import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

if (process.env.NODE_Env === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.listen(5000, () => {
  console.log("server is running");
});
