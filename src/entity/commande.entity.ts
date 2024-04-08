// commande.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, ManyToMany, OneToMany} from 'typeorm';
import { Client } from './client.entity';
import { Employe } from './employe.entity';
import { Article } from './article.entity';

@Entity()
export class Commande extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Client, client => client.commandes)
    client: Client;

    @ManyToOne(() => Employe, employe => employe.commandes)
    employe: Employe;

    @Column()
    dateEtHeure: Date;

    @Column()
    statut: string;

    @OneToMany(() => Article, article => article.commande)
    articles: Article[];

}
