import { Router } from "express";
import { createCategoryController, listCategoriesController } from "../controllers/category.controller";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middlewares";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureCategoryNameIsUniqueMiddleware from "../middlewares/ensureCategoryNameIsUnique.middlewares";

const categoryRoutes : Router = Router()

categoryRoutes.post('',ensureCategoryNameIsUniqueMiddleware,ensureTokenIsValidMiddleware,ensureUserIsAdminMiddleware,createCategoryController)

categoryRoutes.get('',listCategoriesController)

export default categoryRoutes