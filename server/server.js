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

//Passport Strategies
require("./config/passport-jwt");
require("./config/passport-oauth");

//Routes
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);

const OAuthRouter = require("./routes/auth/oauth");
app.use("/api/auth", OAuthRouter);

app.listen(5000, () => {
  console.log("Server running...");
});
