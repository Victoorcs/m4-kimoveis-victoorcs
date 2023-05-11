import {z} from 'zod'
import { addressSchema, realEstateRequestSchema, realEstateSchema,  } from '../schema/realEstateSchema'



type TRealEstate = z.infer<typeof realEstateSchema>

type TRealEstateRequest = z.infer<typeof realEstateRequestSchema>

type TAddress = z.infer<typeof addressSchema>





export {TAddress,TRealEstate,TRealEstateRequest}