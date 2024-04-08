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
exports.ReservationController = void 0;
const reservation_entity_1 = require("../entity/reservation.entity");
class ReservationController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reservation = req.body;
                const newReservation = reservation_entity_1.Reservation.create(reservation);
                yield newReservation.save();
                res.json(newReservation);
            }
            catch (error) {
                console.error("An unexpected error occurred while creating reservation", error);
                return res.status(500).send({
                    message: "An unexpected error occurred while creating reservation"
                });
            }
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reservations = yield reservation_entity_1.Reservation.find();
                return res.json(reservations);
            }
            catch (e) {
                return res.status(500).send({
                    message: "An unexpected error occurred while associating reservation"
                });
            }
        });
    }
    static getReservationById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const reservation = yield reservation_entity_1.Reservation.findOne({ where: { id: id } });
                if (!reservation)
                    return res.status(401).json({ message: "Reservation not found" });
                return res.json(reservation);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting reservation by id"
                });
            }
        });
    }
}
exports.ReservationController = ReservationController;
