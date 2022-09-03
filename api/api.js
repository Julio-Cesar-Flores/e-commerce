import express from "express";
import * as fs from "fs";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

const api = express();
api.use(express.json());

api.get("/", (_, res) => {
  return res.json({
    msg: "API /login /register /categories /products",
    login: "email password",
    register: "Client, Administrator, Seller",
    categories: "Seller",
    products: "Seller, Client",
    cart: "add product"
  });
});

api.get("/status", (_, res) => {
  return res.json({
    msg: "API funcionando",
    data: "/login /register /categories /products /cart",
  });
});

api.use(userRoutes);
api.use(authRoutes);
api.use(categoryRoutes);
api.use(productRoutes);
api.use(cartRoutes);

export default api;
