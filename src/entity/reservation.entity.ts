// reservation.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from 'typeorm';
import { Client } from './client.entity';
import { Table } from './table.entity';

@Entity()
export class Reservation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Client, client => client.reservations)
    client: Client;

    @ManyToOne(() => Table, table => table.reservations)
    table: Table;

    @Column()
    dateEtHeure: Date;

    @Column()
    statut: string;
}
