// stock.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Article } from './article.entity';

@Entity()
export class Stock {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Article)
    @JoinColumn()
    article: Article;

    @Column()
    quantiteEnStock: number;

    @Column()
    niveauReapprovisionnementCritique: number;

    @Column()
    dateMiseAJour: Date;
}
