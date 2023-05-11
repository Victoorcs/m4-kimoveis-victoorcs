import { NextFunction,Response,Request } from "express"
import { Address } from "../entities"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { AppError } from "../error";
import { TAddress } from "../interfaces/realEstate.interface";


const ensureAddressIsUniqueMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const {address}  = req.body

  if (address) {
    const { street, zipCode, number, city, state } = address

    const findAddress = await addressRepository.findOne({
      where: { street, zipCode, number, city, state }
    })

    if (findAddress) {
      throw new AppError('Address already exists', 409)
    }
  }

  return next()
}

    

  
export default ensureAddressIsUniqueMiddleware