import { AppDataSource } from "../data-source"
import { RealEstate } from "../entities"




const listRealEstateService = async () => {
    
    const realEstateRepository = AppDataSource.getRepository(RealEstate)

    const findRealEstate: RealEstate [] = await realEstateRepository.find({
        relations: {
            address: true
        }
    })

    return findRealEstate
}

export default listRealEstateService