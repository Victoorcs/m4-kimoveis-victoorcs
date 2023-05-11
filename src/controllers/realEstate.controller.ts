import { Request, Response } from "express";
import { TRealEstate, TRealEstateRequest } from "../interfaces/realEstate.interface";
import createRealEstateService from "../services/createRealEstate.service";
import listRealEstateService from "../services/listRealEstate.service";

const createRealEstateController = async (req:Request,res:Response):Promise<Response> =>{
    const realEstateData: TRealEstateRequest = req.body

    const realEstate = await createRealEstateService(realEstateData)
    
return res.status(201).json(realEstate)
}


const listRealEstateController = async (req: Request, res: Response):Promise<Response> => {

    const listRealEstate = await listRealEstateService()

    return res.status(200).json(listRealEstate)
}


export {createRealEstateController,listRealEstateController}