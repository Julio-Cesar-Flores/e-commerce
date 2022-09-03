import bcrypt from "bcrypt";
import Cart from "../models/Cart.js";
import User, { CLIENT, ADMINISTRATOR } from "../models/User.js";

const createUser = async (req, res) => {
  //TODO: Si es admin crea un admin o a un vendedor
  const admin = req.User;
  const user = req.body;
  const isClient = user.role === CLIENT;
  const isAdmin = admin?.role === ADMINISTRATOR;

  if (isClient || isAdmin) {
    try {
      // admin puede crear administradores y vendedores
      const encryptedPass = await bcrypt.hash(user.password, 4);
      user.password = encryptedPass;

      const userWId = new User(user); // user con id
      const cartWId = new Cart(); // cart con id

      userWId.cartId = cartWId._id;
      cartWId.userId = userWId._id;

      const updateUser = await userWId.save();
      const updateCart = await cartWId.save();

      updateUser.password = undefined;
      return res.json({
        msg: "User " + user.role + " created",
        data: { user: updateUser, cart: updateCart },
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          msg: "Ya existe un usuario registrado con ese correo",
        });
      }
      return res.status(500).json({
        msg: "Ocurrio un error al registrar usuario",
        error,
      });
    }
  } else {
    return res.json({
      msg: "Sólo un admin crea un admin o seller",
    });
  }
};

export { createUser };
