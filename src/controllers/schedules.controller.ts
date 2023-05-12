import { Request, Response } from "express";
import createScheduleService from "../services/createSchedule.service";
import listSchedulesService from "../services/listSchedules.service";

const createScheduleController = async (req: Request, res: Response):Promise<Response> => {

    const scheduleData = req.body

    const userId = res.locals.userId

    const newSchedule = await createScheduleService(scheduleData, userId)

    return res.status(201).json(newSchedule)
}


const listSchedulesController = async (req: Request, res: Response):Promise<Response> => {

    const scheduleId: number = Number(req.params.id)

    const listSchedule = await listSchedulesService(scheduleId)

    return res.json(listSchedule)
}
export {createScheduleController,listSchedulesController}
    