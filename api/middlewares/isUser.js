import jwt from "jwt-simple";
import config from "../config/index.js";
import User from "../models/User.js";

const isUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const payload = jwt.decode(token, config.jwt.secret);
      const user = await User.findById(payload.userId);
      if (user) {
        req.User = user;
      }
    }
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token - User",
      error
    });
  }
};

export default isUser;
