import { z } from 'zod'
import { categorySchema } from './categorySchema'


const addressSchema = z.object({
    id:z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullable().optional(),
    city: z.string().max(20),
    state: z.string().max(2),
})

const addressRequestSchema = addressSchema.omit({id:true})

const realEstateSchema = z.object({
    id:z.number(),
    value: z.number().or(z.string()),
    size: z.number().positive(),
    address: addressSchema,
    category: categorySchema,
    sold:z.boolean().default(false),
    createdAt:z.string(),
    updatedAt:z.string(),
    
})

const realEstateResponseSchema = z.array(realEstateSchema)

const realEstateRequestSchema = realEstateSchema.omit({id:true,createdAt:true,updatedAt:true,sold:true,category:true,address:true}).extend({categoryId:z.number(),address:addressRequestSchema})


export{realEstateSchema,addressSchema,realEstateRequestSchema,addressRequestSchema,realEstateResponseSchema}