import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middlewares";
import { realEstateRequestSchema, realEstateSchema } from "../schema/realEstateSchema";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureAddressIsUniqueMiddleware from "../middlewares/ensureAddressIsUnique.middlewares";

const realEstateRoutes: Router = Router()

realEstateRoutes.post('',ensureTokenIsValidMiddleware,ensureUserIsAdminMiddleware,ensureAddressIsUniqueMiddleware,ensureDataIsValidMiddleware(realEstateRequestSchema),createRealEstateController)

export default realEstateRoutes