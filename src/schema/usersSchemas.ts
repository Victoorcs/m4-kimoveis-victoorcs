import { Admin } from 'typeorm'
import {z} from 'zod'

const userSchema = z.object ({
    id:z.number(),
    name:z.string().max(45),
    email:z.string().email().max(45),
    password:z.string().max(120),
    admin:z.boolean().optional().default(false),
    createdAt:z.string(),
    updatedAt:z.string(),
    deletedAt:z.string().nullish()
})

const userSchemaRequest = userSchema.omit({createdAt:true,updatedAt:true,deletedAt:true,id:true})

const updateUserSchema = userSchemaRequest.partial().omit({admin:true})

const userSchemaResponse = userSchema.omit({password:true})

const usersSchemaResponse = z.array(userSchemaResponse)

export {userSchema,userSchemaRequest,userSchemaResponse,usersSchemaResponse,updateUserSchema}