import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import User from "../models/User.js";
import config from "../config/index.js";

const login = async (req, res) => {

  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }

    const passCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!passCorrect) {
      return res.status(401).json({
        msg: "Credenciales inválidas",
      });
    }
    //TODO: crear token y regresarlo
    //const expirationDate = new Date();
    //expirationDate.setMinutes(expirationDate.getMinutes() + 3);

    const payload = {
      userId: user.id,
      //expirationDate,
    };

    const token = jwt.encode(payload, config.jwt.secret);

    return res.json({
      msg: "Login correcto",
      data: { token },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al hacer login",
    });
  }
};

export { login };
