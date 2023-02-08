const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    }, //every user has one cart
    products: [
      {
        quantity: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true } //by mongoose its used to create automatically createdAt, updatedAt
);

module.exports = mongoose.model("Cart", CartSchema); //now we can use this schema inside our router
