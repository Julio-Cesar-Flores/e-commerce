import jwt from "jwt-simple";
import config from "../config/index.js";
import User, { CLIENT, SELLER } from "../models/User.js";

const isUserSeller = async (req, res, next) => {
  const rol = req.User?.role;
  if (rol !== SELLER && rol !== CLIENT) {
    return res.status(401).json({
      msg: "El usuario no permitido",
    });
  }
  next();
};

export default isUserSeller;
