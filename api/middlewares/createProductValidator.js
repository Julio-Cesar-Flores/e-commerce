import joi from "joi";
import Category from "../models/Category.js";

const createProductSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  specification: joi.string().default("Not available"),

  category: joi.string().hex().length(24).required(),

  price: joi.number().integer().positive().required(),
  quantity: joi.number().integer().positive().required(),
  imageUrl: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await createProductSchema.validateAsync(req.body);
    const catego = await Category.findById(req.body.category);
    if (!catego) {
      return res.status(400).json({
        msg: "Error producto categoría inexistente",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validación del producto",
      error,
    });
  }
};
