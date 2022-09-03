import jwt from "jwt-simple";
import config from "../config/index.js";
import User, { CLIENT } from "../models/User.js";

const isUserClient = async (req, res, next) => {
  const user = req.User;
  if (user?.role !== CLIENT) {
    return res.status(401).json({
      msg: "El usuario no es " + CLIENT,
    });
  }
  next();
};

export default isUserClient;
