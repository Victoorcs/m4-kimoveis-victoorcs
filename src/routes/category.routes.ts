import { Router } from "express";
import { createCategoryController } from "../controllers/category.controller";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middlewares";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureCategoryNameIsUniqueMiddleware from "../middlewares/ensureCategoryNameIsUnique.middlewares";

const categoryRoutes : Router = Router()

categoryRoutes.post('',ensureCategoryNameIsUniqueMiddleware,ensureTokenIsValidMiddleware,ensureUserIsAdminMiddleware,createCategoryController)

export default categoryRoutes