import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { TCategory } from "../interfaces/category.interface"
import { categorySchema } from "../schema/categorySchema"



const createCategoryService = async (categoryData: TCategory): Promise<TCategory> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
  
    const category: Category = categoryRepository.create(categoryData)
  
    await categoryRepository.save(category)
  
    const returnCategory: TCategory = categorySchema.parse(category)
  
    return returnCategory
  }
  
  export default createCategoryService