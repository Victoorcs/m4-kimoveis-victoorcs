import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const ensureTokenIsValidMiddleware = (req:Request,res:Response,next:NextFunction) =>{

    let token:string | undefined = req.headers.authorization

    if(!token){
        throw new AppError("Missing bearer token",401)
    }
    token = token.split(" ")[1]

    jwt.verify(token,process.env.SECRET_KEY!,(error:any,decoded:any)=>{
        if(error) throw new AppError(error.message,401)

        res.locals.admin = decoded.admin

        res.locals.userId = decoded.sub

        return next()
    })

}
export default ensureTokenIsValidMiddleware