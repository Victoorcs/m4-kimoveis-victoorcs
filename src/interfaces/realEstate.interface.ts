import {z} from 'zod'
import { addressSchema, realEstateRequestSchema, realEstateResponseSchema, realEstateSchema,  } from '../schema/realEstateSchema'



type TRealEstate = z.infer<typeof realEstateSchema>

type TRealEstateRequest = z.infer<typeof realEstateRequestSchema>

type TAddress = z.infer<typeof addressSchema>

type TRealEstateResponse = z.infer<typeof realEstateResponseSchema>



export {TAddress,TRealEstate,TRealEstateRequest,TRealEstateResponse}