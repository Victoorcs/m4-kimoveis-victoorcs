import { z } from 'zod'

const categorySchema = z.object({
    id:z.number(),
    name: z.string().max(45)
})

const categorySchemaResponse = z.array(categorySchema)

export {categorySchema,categorySchemaResponse}