import jwt from "jwt-simple";
import config from "../config/index.js";
import User from "../models/User.js";

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    //Si no hay token next el cliente puede registrarse
    if (!token) {
      next();
    }
    /*
    if (!token) {
      return res.status(400).json({
        msg: "Cabecera Authorization faltante",
      });
    }*/

    const payload = jwt.decode(token, config.jwt.secret);
    const user = await User.findById(payload.userId);

    //Si no hay user el cliente puede registrarse
    /*
    if (!user) {
      return res.status(401).json({
        msg: "Token inválido",
      });
    }*/
    if (!user) {
      next();
    }
    res.User = user; //Si posteriormente no hay usuario no puede hacer cosas

    //TODO: Descomentar cuando se tenga timeout en sesiones
    /*const expirationDate = new Date(payload.expirationDate);
    if (expirationDate.getTime() < new Date().getTime()) {
      return res.status(400).json({
        msg: 'El token ha expirado',
      });
    }*/

    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token inválido",
      error, //TODO: No enviar error de desarrollo
    });
  }
};

export default isAuth;
