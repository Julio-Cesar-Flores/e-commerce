import joi from "joi";
import Cart from "../models/Cart.js";
import Category from "../models/Category.js";

const addCartSchema = joi.object({
  productId: joi.string().hex().length(24).required(),
  quantity: joi.number().integer().positive().required(),
});

export default async (req, res, next) => {
  try {
    await addCartSchema.validateAsync(req.body);
    const cart = await Cart.findOne(req.User?.cartId);
    if (!cart) {
      return res.status(400).json({
        msg: "Error no hay carrito",
      });
    }
    req.Cart = cart;
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validación del producto",
      error,
    });
  }
};
