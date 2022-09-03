import joi from "joi";

import { ROLES, CLIENT } from "../models/User.js";

//const regexp = ''

const createUserSchema = joi.object({
  role: joi
    .string()
    .required()
    .valid(...ROLES),
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
  address: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.string().required(),
    otherwise: joi.forbidden(),
  }),
  location: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.string().required(),
    otherwise: joi.forbidden(),
  }),
  numExterior: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.number().required(),
    otherwise: joi.forbidden(),
  }),
  numInterior: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.number().required(),
    otherwise: joi.forbidden(),
  }),
  city: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.string().required(),
    otherwise: joi.forbidden(),
  }),
  country: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.string().required(),
    otherwise: joi.forbidden(),
  }),
  zipCode: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.string().required(),
    otherwise: joi.forbidden(),
  }),
  references: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.string().required(),
    otherwise: joi.forbidden(),
  }),
  personalReferences: joi.alternatives().conditional("role", {
    is: CLIENT,
    then: joi.string().required(),
    otherwise: joi.forbidden(),
  }),
  //cart shoppingCart 
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
