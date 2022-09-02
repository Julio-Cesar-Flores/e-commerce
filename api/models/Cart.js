import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
      name: String, //Para listado
      price: Number,
    },
  ],
  paidOn: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Cart", schema);

//  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
