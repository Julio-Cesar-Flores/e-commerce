import jwt from "jwt-simple";
import config from "../config/index.js";
import User, { ADMINISTRATOR } from "../models/User.js";

const isUserAdmin = async (req, res, next) => {
  const user = req.User;
  if (user?.role === ADMINISTRATOR) {
    return res.status(401).json({
      msg: "El usuario no es " + ADMINISTRATOR,
    });
  }
  next();
};

export default isUserAdmin;
