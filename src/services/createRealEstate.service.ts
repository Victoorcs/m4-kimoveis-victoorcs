import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Address, Category, RealEstate } from "../entities"
import { TRealEstate, TRealEstateRequest, } from "../interfaces/realEstate.interface"
import { AppError } from "../error"
import { realEstateRequestSchema, realEstateSchema } from "../schema/realEstateSchema"




const createRealEstateService = async (realEstateData: TRealEstateRequest): Promise<TRealEstate> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const address: Address = addressRepository.create(realEstateData.address)
    
    await addressRepository.save(address)
    
    const findCategory = await categoryRepository.findOneBy({
        id: realEstateData.categoryId,
    })

    if (!findCategory) {
        throw new AppError("Category not found", 404)
    }

    const realEstate: RealEstate = realEstateRepository.create({
        ...realEstateData,
        address: address,
        category: findCategory,
    })

    await realEstateRepository.save(realEstate)

    const newRealEstate = realEstateSchema.parse(realEstate)

    return newRealEstate


}

export default createRealEstateService