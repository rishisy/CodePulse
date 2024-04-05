import express from "express";
import api from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
mongoose.connect(
  "mongodb+srv://mohak1763be21:6tzHqqcXT72uLiDO@cluster0.vd9ys2m.mongodb.net/codePulse",
  () => {
    console.log("db connected");
  },
  (e) => console.log(e)
);

const PORT = 9000;
const origin = "http://localhost:3000";

const app = express();

app.use(
  cors({
    origin,
  })
);
app.use(express.json());
app.use(express.urlencoded());

app.use(api);

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.listen(PORT, () => {
  console.log(`Your app is running in http://localhost:${PORT}`);
});
