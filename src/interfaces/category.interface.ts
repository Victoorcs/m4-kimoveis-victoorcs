import {z} from 'zod'
import { categorySchema, categorySchemaResponse } from '../schema/categorySchema'


type TCategory = z.infer<typeof categorySchema>

type TCategoryResponse = z.infer<typeof categorySchemaResponse>

export{TCategory,TCategoryResponse}