const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
    amount: {
      type: Number,
      required: true
    },
    address: {
      type: Object,
      required: true
    },
    status: {
      type: String,
      default: "pending"
    },
  },
  { timestamps: true } //by mongoose its used to create automatically createdAt, updatedAt
);

module.exports = mongoose.model("Cart", OrderSchema); //now we can use this schema inside our router
