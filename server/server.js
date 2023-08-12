require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const passport = require("passport");

//Connect to DB
connectDB();

//Middleware
app.use(cors(corsOptions));
app.use(passport.initialize());

//Passport Strategy
require("./config/passport-jwt");

//Routes
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);

app.listen(5000, () => {
  console.log("Server running...");
});
