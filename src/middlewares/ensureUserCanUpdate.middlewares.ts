import { Response,Request,NextFunction } from "express"
import { AppError } from "../error"



const ensureUserCanUpdateMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const userIdToUpdate = res.locals.userId 

    const isAdmin = res.locals.admin 

    const isUpdatingOwnUser = req.params.id === userIdToUpdate 

    if (!isAdmin && !isUpdatingOwnUser) {
      throw new AppError("Insufficient permission", 403)
    }
  
    return next()
  }
  
  export default ensureUserCanUpdateMiddleware