import express from "express";
import * as productController from "../controllers/productController.js";
import createProductValidator from "../middlewares/createProductValidator.js";
import isUser from "../middlewares/isUser.js";
import isUserSeller from "../middlewares/isUserSeller.js";
import isUserSellerClient from "../middlewares/isUserSellerClient.js";

const router = express.Router();

router
  .route("/product")
  .get(isUser, isUserSellerClient, productController.getAllProducts)
  .post(
    isUser,
    isUserSeller,
    createProductValidator,
    productController.createProduct
  );

router
  .route("/product/:id")
  .get(isUser, isUserSeller, productController.getProductById)
  .put(isUser, isUserSeller, productController.updateProductById)
  .delete(isUser, isUserSeller, productController.deleteProductById);

export default router;
