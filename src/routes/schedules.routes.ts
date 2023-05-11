import { Router } from "express";
import { createScheduleController } from "../controllers/schedules.controller";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middlewares";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import { scheduleSchemaRequest } from "../schema/schedulesSchema";


const schedulesRoutes:Router = Router()

schedulesRoutes.post('',ensureTokenIsValidMiddleware,ensureDataIsValidMiddleware(scheduleSchemaRequest),createScheduleController)

export default schedulesRoutes