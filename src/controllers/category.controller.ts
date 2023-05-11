import { Request,Response } from "express";
import { TCategory, TCategoryResponse } from "../interfaces/category.interface";
import createCategoryService from "../services/createCategory.service";
import listCategoriesService from "../services/listCategories.service";
import listRealEstatesAndCategoryService from "../services/listRealEstateAndCategory.service";

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const categoryData:TCategory = req.body

    const newCategory = await createCategoryService(categoryData)

    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    
    const category = await listCategoriesService()

    return res.status(200).json(category)
}


const listRealEstatesAndCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const categoryId: number = Number(req.params.id)

    const realEstateAndCategory: TCategoryResponse = await listRealEstatesAndCategoryService(
        categoryId)
    

    return res.json(...realEstateAndCategory)
}

export {createCategoryController,listCategoriesController,listRealEstatesAndCategoryController}