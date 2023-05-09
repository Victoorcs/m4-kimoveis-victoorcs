import {Request,Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"


const ensureEmailIsUniqueMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)
    const { email } = req.body
  
    const existingUser = await usersRepository.findOne({
      where: { email }
    })
  
    if (existingUser) {
        throw new AppError("Email already exists",409)
    }
  
    return next()
  }
  
  export default ensureEmailIsUniqueMiddleware