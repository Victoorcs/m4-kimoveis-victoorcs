import { Repository } from "typeorm";
import { User } from "../entities";
import { TUserRequest, TUserResponse } from "../interfaces/users.interface";
import {AppDataSource} from "../data-source";
import { userSchemaResponse } from "../schema/usersSchemas";

const createUserService = async (userData:TUserRequest):Promise <TUserResponse> =>{

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user:User = userRepository.create(userData)

    await userRepository.save(user)

    const returnUser:TUserResponse = userSchemaResponse.parse(user)

    return returnUser
}

export default createUserService