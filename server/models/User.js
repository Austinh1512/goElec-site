const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  googleID: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      //Only require password if account is not linked through Google
      return !this.googleID;
    },
  },
  refreshToken: {
    type: String,
    default: "",
  },
  addresses: [
    {
      streetAddress: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      address2: {
        type: String,
      },
    },
  ],
  cart: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  wishlist: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
