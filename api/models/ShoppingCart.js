import mongoose from "mongoose";

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export default mongoose.model("ShoppingCart", schema);

//  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
