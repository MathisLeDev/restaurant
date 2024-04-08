import {DataSource} from "typeorm";
import {User} from "./entity/user";
import {Article} from "./entity/article.entity";
import {Client} from "./entity/client.entity";
import {Commande} from "./entity/commande.entity";
import {Employe} from "./entity/employe.entity";
import {Reservation} from "./entity/reservation.entity";
import {Stock} from "./entity/stock.entity";
import {Table} from "./entity/table.entity";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "172.24.240.1",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, Article, Client, Commande, Employe, Reservation, Stock, Table],
    subscribers: [],
    migrations: [],
})
