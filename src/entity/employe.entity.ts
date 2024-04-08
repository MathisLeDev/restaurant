// employe.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from 'typeorm';
import { Commande } from './commande.entity';

@Entity()
export class Employe extends BaseEntity{
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

    @Column()
    role: string;

    @Column()
    horaireTravail: string; // Peut-être définir un type approprié selon votre besoin

    @ManyToOne(() => Commande, commande => commande.employe)
    commandes: Commande[];
}
