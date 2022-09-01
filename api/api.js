import express from "express";
import * as fs from "fs";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas
const pageError = (res, err) => {
  res.statusCode = 500;
  res.setHeader("Content-Type", "text/html");
  res.write("<h3>" + err + " </h3>");
  res.end();
  return res;
};

api.get("/", (_, res) => {
  return res.json({
    msg: "API ok",
    login: "email password",
    register: "Client, Administrator, Seller",
  });
});

api.get("/status", (_, res) => {
  return res.json({
    msg: "API funcionando",
    data: "/login /",
  });
});

api.use(userRoutes);
api.use(authRoutes);

//TODO: rutas

export default api;
