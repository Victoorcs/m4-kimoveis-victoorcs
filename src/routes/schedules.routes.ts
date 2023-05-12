import { Router } from "express";
import { createScheduleController, listSchedulesController } from "../controllers/schedules.controller";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middlewares";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import { scheduleSchemaRequest } from "../schema/schedulesSchema";


const schedulesRoutes:Router = Router()

schedulesRoutes.post('',ensureTokenIsValidMiddleware,ensureDataIsValidMiddleware(scheduleSchemaRequest),createScheduleController)

schedulesRoutes.get('/realEstate/:id',ensureTokenIsValidMiddleware,ensureUserIsAdminMiddleware,listSchedulesController)

export default schedulesRoutes