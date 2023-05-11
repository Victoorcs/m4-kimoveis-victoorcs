import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './user.entity'
import { RealEstate } from './realEstate.entity'

@Entity('schedules')
class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    @JoinColumn()
    realEstate: RealEstate

    @ManyToOne(() => User, (user) => user.schedules)
    @JoinColumn()
    user: User
}

export { Schedule }