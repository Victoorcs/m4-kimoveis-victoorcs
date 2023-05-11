import { Response,Request,NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../error";



const ensureCategoryExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
  
    const category = await categoryRepository.findOne({
        where: {id: Number(req.params.id)}
    })
  
    if (!category) {
      throw new AppError("Category not found", 404)
    }
  
    return next()
  }
  
  export default ensureCategoryExistsMiddleware