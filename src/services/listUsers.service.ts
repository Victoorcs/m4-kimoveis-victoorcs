import { Repository } from "typeorm"
import { TUsersResponse } from "../interfaces/users.interface"
import { User } from "../entities"
import { AppDataSource } from "../data-source"
import { usersSchemaResponse } from "../schema/usersSchemas"


const listUsersService = async ():Promise<TUsersResponse> =>{
    
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const users: User[] = await userRepository.find()
    
    const returnUsers:TUsersResponse = usersSchemaResponse.parse(users)

    return returnUsers
}

export default listUsersService