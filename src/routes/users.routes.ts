import { Router } from "express";
import { createUsersController, deleteUserController, listUsersController, updateUserController } from "../controllers/usersController";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import { updateUserSchema, userSchemaRequest } from "../schema/usersSchemas";
import ensureEmailIsUniqueMiddleware from "../middlewares/ensureEmailIsUnique.middlewares";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middlewares";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middlewares";
import ensureUserCanUpdateMiddleware from "../middlewares/ensureUserCanUpdate.middlewares";



const userRoutes: Router = Router()

userRoutes.post('',ensureDataIsValidMiddleware(userSchemaRequest),ensureEmailIsUniqueMiddleware,createUsersController)

userRoutes.get('',ensureTokenIsValidMiddleware,ensureUserIsAdminMiddleware,listUsersController)

userRoutes.delete('/:id',ensureUserExistsMiddleware,ensureTokenIsValidMiddleware,ensureUserIsAdminMiddleware,deleteUserController)

userRoutes.patch('/:id',ensureUserExistsMiddleware,ensureTokenIsValidMiddleware,ensureUserCanUpdateMiddleware,ensureDataIsValidMiddleware(updateUserSchema),updateUserController)

export default userRoutes