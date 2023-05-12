import { z } from 'zod'
import { realEstateSchema } from './realEstateSchema'
import { userSchema } from './usersSchemas'

const scheduleSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
    user: userSchema,
})

const scheduleSchemaRequest = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
})

const createScheduleResult = z.object({
    message:z.string()
})

export{scheduleSchema,scheduleSchemaRequest,createScheduleResult}