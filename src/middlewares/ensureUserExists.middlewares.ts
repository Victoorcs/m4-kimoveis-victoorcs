import { Response,Request,NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"


const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const  id  = req.params.id
  
    const existingUser = await userRepository.findOne({
      where: { id:Number(id) } 
    })
  
    if (!existingUser) {
      throw new AppError("User not found",404)
    }
  
    return next()
  }
  
  export default ensureUserExistsMiddleware