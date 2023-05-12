import { AppDataSource } from "../data-source"
import { RealEstate } from "../entities"
import { AppError } from "../error"


const listSchedulesService = async (id:number): Promise<RealEstate> => {

    const realEstateRepository = AppDataSource.getRepository(RealEstate)

    const realEstate = await realEstateRepository.findOne({
        where: {
            id: id
        }
    })

    if (!realEstate) {
        throw new AppError('RealEstate not found', 404)
    }

    const realEstateSchedule = await realEstateRepository
        .createQueryBuilder('realEstate')
        .select(['realEstate', 'schedule', 'address', 'categories', 'users'])
        .innerJoin('realEstate.schedules', 'schedule')
        .innerJoin('realEstate.address', 'address')
        .innerJoin('realEstate.category', 'categories')
        .innerJoin('schedule.user', 'users')
        .where('realEstate.id = :id', { id })
        .getOne()

    return realEstateSchedule!
}
export default listSchedulesService