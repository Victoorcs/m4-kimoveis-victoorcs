import {z} from 'zod'
import { loginSchema } from '../schema/loginSchema'

type TLoginRequest = z.infer<typeof loginSchema>

export{TLoginRequest}