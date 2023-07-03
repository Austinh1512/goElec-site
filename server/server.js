require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

connectDB();

//Routes
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);

app.listen(3000, () => {
  console.log("Server running...");
});
