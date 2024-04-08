
// client.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from 'typeorm';
import { Reservation } from './reservation.entity';
import { Commande } from './commande.entity';

@Entity()
export class Client extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    adresse: string;

    @Column()
    numeroTelephone: string;

    @Column({ default: 0 })
    pointsFidelite: number;

    @OneToMany(() => Reservation, reservation => reservation.client, { nullable: true }) // nullable sur reservations
    reservations: Reservation[];

    @OneToMany(() => Commande, commande => commande.client, { nullable: true }) // nullable sur commandes
    commandes: Commande[];
}
