import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { TCategoryResponse } from "../interfaces/category.interface"



const listRealEstatesAndCategoryService = async (categoryId: number): Promise<TCategoryResponse> => {
    
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const realEstateCategory: Category[] = await categoryRepository.find({
        where: {
            id: categoryId,
        },
        relations: {
            realEstate: true,
        },
    })

    return realEstateCategory
}

export default listRealEstatesAndCategoryService