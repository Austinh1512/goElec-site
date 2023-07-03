require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

//Connect to DB
connectDB();

//Middleware
app.use(cors(corsOptions));

//Routes
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);

app.listen(3000, () => {
  console.log("Server running...");
});
