import { Request, Response } from "express";
import { TRealEstate, TRealEstateRequest } from "../interfaces/realEstate.interface";
import createRealEstateService from "../services/createRealEstate.service";

const createRealEstateController = async (req:Request,res:Response):Promise<Response> =>{
    const realEstateData: TRealEstateRequest = req.body

    const realEstate = await createRealEstateService(realEstateData)
    
return res.status(201).json(realEstate)
}


export {createRealEstateController}