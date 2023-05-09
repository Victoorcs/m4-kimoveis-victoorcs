import { Router } from "express";
import { createLoginController } from "../controllers/createLogin.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import { loginSchema } from "../schema/loginSchema";


const loginRoutes:Router = Router()

loginRoutes.post('',ensureDataIsValidMiddleware(loginSchema),createLoginController)


export default loginRoutes