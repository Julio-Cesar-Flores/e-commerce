import User, { CLIENT } from "../models/User.js";

const createUser = async (req, res) => {
  try {
    //TODO: Si es admin crea un admin o a un vendedor
    const admin = req.User;
    const user = req.body;
    if (!admin && user.role === CLIENT) {
      //
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
      msg: "Error al actualizar usuario",
      data: error,
    });
  }
};

export { createUser };
