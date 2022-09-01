import joi from "joi";

const createProductSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  specification: joi.string().default("Not available"),
  //TODO: crear la categoria
  category: joi.string().hex().length(24),
  price: joi.number().integer().positive().required(),
  quantity: joi.number().integer().positive().required(),
  imageUrl: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await createProductSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validación del producto",
      error,
    });
  }
};
