// article.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity, ManyToOne} from 'typeorm';
import { Commande } from './commande.entity';

@Entity()
export class Article extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    prix: number;

    @Column()
    categorie: string;

    @ManyToOne(() => Commande, commande => commande.articles)
    commande: Commande;


}
