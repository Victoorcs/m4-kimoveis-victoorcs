import { Request, Response } from "express";
import createScheduleService from "../services/createSchedule.service";

const createScheduleController = async (req: Request, res: Response):Promise<Response> => {

    const scheduleData = req.body

    const userId = res.locals.userId

    const schedule = await createScheduleService(scheduleData, userId)

    return res.status(201).json({message:"Schedule created"})
}
export {createScheduleController}
    