import express from "express";
import { addProductToCart } from "../controllers/cartController.js";
import addCartValidator from "../middlewares/addCartValidator.js";
import isUser from "../middlewares/isUser.js";
import isUserClient from "../middlewares/isUserClient.js";

const router = express.Router();

router.post("/cart", isUser, isUserClient, addCartValidator, addProductToCart);

export default router;
