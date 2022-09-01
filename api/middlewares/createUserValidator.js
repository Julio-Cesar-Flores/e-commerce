import joi from "joi";

import { ROLES, CLIENT } from "../models/User.js";

//const regexp = ''

const createUserSchema = joi.object({
  role: joi
    .string()
    .valid(...ROLES)
    .default(CLIENT)
    .required(),
  name: joi.string().required(),
  lastName: joi.string().required(),
  phone: joi.string().required(),
  email: joi.string().required(),
  password: joi
    .string()
    .min(8)
    .max(25)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "password"
    ),
  address: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  location: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  numExterior: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  numInterior: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  city: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  country: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  zipCode: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  references: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  personalReferences: joi
    .alternatives()
    .conditional("role", { is: CLIENT, then: joi.string().required() }),
  //shoppingCart
});

export default async (req, res, next) => {
  try {
    await createUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error validando usuario",
      error,
    });
  }
};
