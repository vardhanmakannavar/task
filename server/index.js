// const express = require("express");
import express from "express"; //server
import mongoose from "mongoose"; //database
import dotenv from "dotenv"; //protection
import cors from "cors";
import bodyParser from "body-parser";

//components
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 2000;

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("conected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.use((error, request, response, next) => {
  const status = error.status || 500;
  const message = error.message || "something went wrong";
  return response.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(PORT, () => {
  connect();
  console.log("Connected to server");
});
