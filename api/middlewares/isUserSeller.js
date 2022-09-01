import jwt from "jwt-simple";
import config from "../config/index.js";
import User, { SELLER } from "../models/User.js";

const isUserSeller = async (req, res, next) => {
  const user = req.User;
  if (user?.role !== SELLER) {
    return res.status(401).json({
      msg: "El usuario no es " + SELLER,
    });
  }
  next();
};

export default isUserSeller;
