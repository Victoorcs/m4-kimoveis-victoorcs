import { Request,Response } from "express";
import { TUserRequest, TUserResponse, TUserUpdateRequest } from "../interfaces/users.interface";
import createUserService from "../services/createUsers.service";
import listUsersService from "../services/listUsers.service";
import deleteUserService from "../services/deleteUser.service";
import updateUserService from "../services/updateUser.service";

const createUsersController = async (req:Request, res:Response): Promise<Response> =>{

    const userData:TUserRequest = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const listUsersController = async (req:Request,res:Response):Promise<Response> =>{

    const users = await listUsersService()

    return res.status(200).json(users)
}

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(req.params.id)
  
    await deleteUserService(userId)

    return res.status(204).json()
}

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    const userData:TUserUpdateRequest = req.body

    const userId:number = Number(req.params.id)

    const newUserData:TUserResponse = await updateUserService(userData,userId)

    return res.json(newUserData)
}

export {createUsersController,listUsersController,deleteUserController,updateUserController}