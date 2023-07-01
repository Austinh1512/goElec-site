const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  category: {
    type: String,
    required: true,
    enum: [
      "electric_skateboards",
      "electric_scooters",
      "electric_bikes",
      "accessories",
    ],
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
