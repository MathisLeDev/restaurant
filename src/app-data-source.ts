import {DataSource} from "typeorm";
import {User} from "./entity/user";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})