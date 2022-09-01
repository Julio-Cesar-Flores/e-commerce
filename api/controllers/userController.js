import User, { CLIENT, ADMINISTRATOR } from "../models/User.js";

const createUser = async (req, res) => {
  try {
    //TODO: Si es admin crea un admin o a un vendedor
    const admin = req.User;
    const user = req.body;
    const isClient = user.role === CLIENT;
    const isAdmin = admin?.role === ADMINISTRATOR;

    if (isClient || isAdmin) {
      // admin puede crear administradores y vendedores
      const updateUser = await User.create(user);
      return res.json({
        msg: CLIENT + " User created",
        data: { user: updateUser },
      });
    } else {
      return res.json({
        msg: "Error al crear usuario",
        data: error,
      });
    }
  } catch (error) {
    return res.json({
      msg: "Error al crear usuario",
      data: error,
    });
  }
};

export { createUser };
