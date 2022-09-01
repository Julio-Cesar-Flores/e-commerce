import express from "express";
import * as userController from "../controllers/userController.js";
import createUserValidator from "../middlewares/createUserValidator.js";
import isUser from "../middlewares/isUser.js";

const router = express.Router();

/**
 * TODO: Acá van todas las rutas de libros
 */

router
  .route("/register")
  .post(isUser, createUserValidator, userController.createUser);

export default router;
