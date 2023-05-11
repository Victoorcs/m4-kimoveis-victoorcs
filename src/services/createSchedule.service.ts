import { Repository} from "typeorm"
import { AppDataSource } from "../data-source"
import { RealEstate, Schedule, User } from "../entities"
import { AppError } from "../error"
import { TSchedules, TSchedulesRequest } from "../interfaces/schedules.interface"
import { scheduleSchema } from "../schema/schedulesSchema"


const createScheduleService = async (scheduleData: TSchedulesRequest, userId: number): Promise<any> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate = await realEstateRepository.findOneBy({
        id: scheduleData.realEstateId,
    })

    if (!realEstate) {
        throw new AppError('RealEstate not found', 404)
    }

    const { hour, date, realEstateId } = scheduleData

    const existingSchedule = await AppDataSource.getRepository(Schedule)
        .createQueryBuilder('schedule')
        .where('schedule.hour = :hour', { hour })
        .andWhere('schedule.date = :date', { date })
        .andWhere('schedule.realEstateId = :realEstateId', { realEstateId })
        .getOne()

    if (existingSchedule) {
            throw new AppError('Schedule to this real estate at this date and time already exists', 409)
        }

    const scheduleDate = new Date(date)

    const hourNumber = Number(hour.slice(0, 2))

    if (hourNumber < 8 || hourNumber > 18) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }
    const dayOfWeek = scheduleDate.getDay()

    if (dayOfWeek < 1 || dayOfWeek > 5) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }

    const userExistingSchedule = await AppDataSource.getRepository(Schedule)
    .createQueryBuilder('schedule')
    .where('schedule.hour = :hour', { hour })
    .andWhere('schedule.date = :date', { date })
    .andWhere('schedule.userId = :userId', { userId })
    .getOne()

    if (userExistingSchedule) {
        throw new AppError(
            'User schedule to this real estate at this date and time already exists',
            409
        )
    }

    const user = await userRepository.findOneBy({
        id: userId,
    })

    const schedule = scheduleRepository.create({
        ...scheduleData,
        realEstate: realEstate!,
        user: user!,
    })

    

    await scheduleRepository.save(schedule)

    //const returnSchedule:TSchedules = scheduleSchema.parse(schedule)

    return {message:"Schedule created"}
}

export default createScheduleService