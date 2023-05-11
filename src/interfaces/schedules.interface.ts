import{ z } from 'zod'
import { scheduleSchema, scheduleSchemaRequest } from '../schema/schedulesSchema'

type TSchedules = z.infer<typeof scheduleSchema>

type TSchedulesRequest = z.infer<typeof scheduleSchemaRequest>


export {TSchedules,TSchedulesRequest}