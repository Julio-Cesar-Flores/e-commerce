import express from "express";
import * as fs from "fs";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const api = express();
api.use(express.json());

api.get("/", (_, res) => {
  return res.json({
    msg: "API ok",
    login: "email password",
    register: "Client, Administrator, Seller",
    categories: "Seller",
  });
});

api.get("/status", (_, res) => {
  return res.json({
    msg: "API funcionando",
    data: "/login /register /categories",
  });
});

api.use(userRoutes);
api.use(authRoutes);
api.use(categoryRoutes);
api.use(productRoutes);

export default api;
