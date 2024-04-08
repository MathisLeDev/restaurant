// table.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from 'typeorm';
import { Reservation } from './reservation.entity';

@Entity()
export class Table extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero: number;

    @Column()
    capacite: number;

    @OneToMany(() => Reservation, reservation => reservation.table)
    reservations: Reservation[];
}
