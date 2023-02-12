// const mongoose = require("mongoose");

// const CartSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true,
//     }, //every user has one cart
//     products: [
//       {
//         productId: {
//           type: String,
//         },
//         quantity: {
//           type: Number,
//           default: 1,
//         },
//       },
//     ],
//   },
//   { timestamps: true } //by mongoose its used to create automatically createdAt, updatedAt
// );

// module.exports = mongoose.model("Cart", CartSchema); //now we can use this schema inside our router
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    //array of objects below
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
