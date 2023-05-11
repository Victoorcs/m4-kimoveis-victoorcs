import { Router } from "express";
import { createCategoryController, listCategoriesController, listRealEstatesAndCategoryController } from "../controllers/category.controller";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middlewares";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureCategoryNameIsUniqueMiddleware from "../middlewares/ensureCategoryNameIsUnique.middlewares";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists.middlewares";

const categoryRoutes : Router = Router()

categoryRoutes.post('',ensureCategoryNameIsUniqueMiddleware,ensureTokenIsValidMiddleware,ensureUserIsAdminMiddleware,createCategoryController)

categoryRoutes.get('',listCategoriesController)

categoryRoutes.get('/:id/realEstate',ensureCategoryExistsMiddleware,listRealEstatesAndCategoryController)

export default categoryRoutes