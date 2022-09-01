import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  specification: {
    type: String,
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
});

export default mongoose.model("Product", schema);
