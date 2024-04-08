"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const article_entity_1 = require("./entity/article.entity");
const client_entity_1 = require("./entity/client.entity");
const commande_entity_1 = require("./entity/commande.entity");
const employe_entity_1 = require("./entity/employe.entity");
const reservation_entity_1 = require("./entity/reservation.entity");
const stock_entity_1 = require("./entity/stock.entity");
const table_entity_1 = require("./entity/table.entity");
exports.appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "172.24.240.1",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [user_1.User, article_entity_1.Article, client_entity_1.Client, commande_entity_1.Commande, employe_entity_1.Employe, reservation_entity_1.Reservation, stock_entity_1.Stock, table_entity_1.Table],
    subscribers: [],
    migrations: [],
});
