require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

connectDB();

app.listen(3000, () => {
  console.log("Server running...");
});
