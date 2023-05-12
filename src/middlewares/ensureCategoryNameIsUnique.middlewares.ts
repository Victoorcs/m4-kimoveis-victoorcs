import { Response,Request,NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { AppError } from "../error"

const ensureCategoryNameIsUniqueMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  
    const categoryName = req.body.name
  
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
  
    const existingCategory = await categoryRepository.findOne({
      where: { name: categoryName }
    })
  
    if (existingCategory) {
      throw new AppError("Category already exists", 409)
    }
  
    return next()
  }
  
  export default ensureCategoryNameIsUniqueMiddleware