require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const setHeaders = require("./middleware/setHeaders");

//Connect to DB
connectDB();

//Middleware
app.use(setHeaders);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

//Passport Strategies
require("./config/passport-jwt");
require("./config/passport-oauth");

//Routes
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);

const authRouter = require("./routes/auth/jwt");
app.use("/api/auth", authRouter);

const googleOAuthRouter = require("./routes/auth/oauth");
app.use("/api/auth/google", googleOAuthRouter);

app.listen(5000, () => {
  console.log("Server running...");
});
