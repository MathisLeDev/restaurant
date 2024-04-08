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
exports.ClientController = void 0;
const client_entity_1 = require("../entity/client.entity");
class ClientController {
    constructor() {
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = req.body;
                const newClient = client_entity_1.Client.create(client);
                yield newClient.save();
                res.json(newClient);
            }
            catch (error) {
                console.error("An unexpected error occurred while creating client", error);
                return res.status(500).send({
                    message: "An unexpected error occurred while creating client"
                });
            }
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield client_entity_1.Client.find();
                return res.json(clients);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting clients"
                });
            }
        });
    }
    static getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const client = yield client_entity_1.Client.findOne({ where: { id: id } });
                if (!client)
                    return res.status(401).json({ message: "Client not found" });
                return res.json(client);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting client by id"
                });
            }
        });
    }
}
exports.ClientController = ClientController;
