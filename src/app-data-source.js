"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
exports.appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [user_1.User],
    subscribers: [],
    migrations: [],
});
