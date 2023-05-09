import { NextFunction,Response,Request } from "express";
import { AppError } from "../error";


const ensureUserIsAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const isAdmin = res.locals.admin

   
    if (!isAdmin) {
        throw new AppError("Insufficient permission",403)
    }

    return next()
}

export default ensureUserIsAdminMiddleware