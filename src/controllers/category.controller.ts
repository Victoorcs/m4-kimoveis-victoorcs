import { Request,Response } from "express";
import { TCategory } from "../interfaces/category.interface";
import createCategoryService from "../services/createCategory.service";

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const categoryData:TCategory = req.body

    const newCategory = await createCategoryService(categoryData)

    return res.status(201).json(newCategory)
}


export {createCategoryController}