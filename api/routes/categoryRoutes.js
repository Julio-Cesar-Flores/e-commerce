import express from "express";
import * as categoryController from "../controllers/categoryController.js";
import createCategoryValidator from "../middlewares/createCategoryValidator.js";
import isUser from "../middlewares/isUser.js";
import isUserSeller from "../middlewares/isUserSeller.js";

const router = express.Router();

router
  .route("/category")
  .get(isUser, isUserSeller, categoryController.getAllCategorys)
  .post(
    isUser,
    isUserSeller,
    createCategoryValidator,
    categoryController.createCategory
  );

router
  .route("/category/:id")
  .get(isUser, isUserSeller, categoryController.getCategoryById)
  .put(isUser, isUserSeller, categoryController.updateCategoryById)
  .delete(isUser, isUserSeller, categoryController.deleteCategoryById);

export default router;
