import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import {  TCategoryResponse } from "../interfaces/category.interface";
import { categorySchemaResponse } from "../schema/categorySchema";



const listCategoriesService = async (): Promise<TCategoryResponse> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categories: Category[] = await categoryRepository.find()

    const returnCategories: TCategoryResponse = categorySchemaResponse.parse(categories)

    return returnCategories
}

export default listCategoriesService