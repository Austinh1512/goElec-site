const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected...");
    })
    .catch((err) => {
      console.log("Error connecting to database:", err);
    });
};

module.exports = connectDB;
