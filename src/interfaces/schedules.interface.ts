import{ z } from 'zod'
import { createScheduleResult, scheduleSchema, scheduleSchemaRequest } from '../schema/schedulesSchema'

type TSchedules = z.infer<typeof scheduleSchema>

type TSchedulesRequest = z.infer<typeof scheduleSchemaRequest>

type TCreateScheduleResponse = z.infer<typeof createScheduleResult>


export {TSchedules,TSchedulesRequest,TCreateScheduleResponse}