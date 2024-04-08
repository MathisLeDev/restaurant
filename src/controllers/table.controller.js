"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableController = void 0;
const table_entity_1 = require("../entity/table.entity");
class TableController {
    constructor() {
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tables = yield table_entity_1.Table.find();
                return res.json(tables);
            }
            catch (e) {
                return res.status(500).send({
                    message: "An unexpected error occurred while associating maladie"
                });
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nouvelleTable = table_entity_1.Table.create(req.body);
                const resultat = yield nouvelleTable.save();
                res.json(resultat);
            }
            catch (error) {
                console.error("An unexpected error occurred while creating commande", error);
                return res.status(500).send({
                    message: "An unexpected error occurred while creating commande"
                });
            }
        });
    }
    static getTableById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const table = yield table_entity_1.Table.findOne({ where: { id: id } });
                if (!table)
                    return res.status(401).json({ message: "Table not found" });
                return res.json(table);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting table by id"
                });
            }
        });
    }
}
exports.TableController = TableController;
