import { Request,Response } from "express";
import { TCategory } from "../interfaces/category.interface";
import createCategoryService from "../services/createCategory.service";
import listCategoriesService from "../services/listCategories.service";

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const categoryData:TCategory = req.body

    const newCategory = await createCategoryService(categoryData)

    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    
    const category = await listCategoriesService()

    return res.status(200).json(category)
}

export {createCategoryController,listCategoriesController}