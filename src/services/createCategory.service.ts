import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { TCategory, TCategoryResponse } from "../interfaces/category.interface"
import { categorySchemaResponse } from "../schema/categorySchema"



const createCategoryService = async (categoryData: TCategory): Promise<TCategoryResponse> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
  
    const category: Category = categoryRepository.create(categoryData)
  
    await categoryRepository.save(category)
  
    const returnCategory: TCategoryResponse = categorySchemaResponse.parse(category)
  
    return returnCategory
  }
  
  export default createCategoryService