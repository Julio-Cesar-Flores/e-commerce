import express from "express";
import * as userController from "../controllers/userController.js";
import createUserValidator from "../middlewares/createUserValidator.js";

const router = express.Router();

/**
 * TODO: Acá van todas las rutas de libros
 */

router.route("/user").post(createUserValidator, userController.createUser);

export default router;
