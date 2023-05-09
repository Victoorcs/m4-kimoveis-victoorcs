import { Request, Response } from "express";
import { TLoginRequest } from "../interfaces/login.interfaces";
import createLoginService from "../services/createLogin.service";

const createLoginController = async (req:Request,res:Response):Promise<Response> =>{

    const loginData:TLoginRequest = req.body
    const token = await createLoginService(loginData)

    return res.json({token})
}

export {createLoginController}