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
exports.EmployeController = void 0;
const employe_entity_1 = require("../entity/employe.entity");
class EmployeController {
    constructor() {
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employes = yield employe_entity_1.Employe.find();
                return res.json(employes);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting employes"
                });
            }
        });
    }
    static getEmployeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const employe = yield employe_entity_1.Employe.findOne({ where: { id: id } });
                if (!employe)
                    return res.status(400).json({ message: "Employe not found" });
                return res.json(employe);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting employe by id"
                });
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employe = req.body;
                const newEmploye = employe_entity_1.Employe.create(employe);
                yield newEmploye.save();
                res.json(newEmploye);
            }
            catch (e) {
                return res.status(500).send({
                    message: "An unexpected error occurred while creating employe"
                });
            }
        });
    }
}
exports.EmployeController = EmployeController;
